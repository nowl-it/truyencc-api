import instance from '@/lib/instance'
import string2html from '@/lib/string2html'
import dotenv from 'dotenv'
import apiJson from '@/crawler/json/api.json'
import axiosRetry from 'axios-retry'

dotenv.config()

export default async function NovelChapter(novel_id: string) {
    const { data: pageHTML } = await instance.get(novel_id)

    const HTML = await string2html(pageHTML)

    const title = HTML.title

    const maxPage = parseInt(
        HTML.querySelector('.pagination > li:nth-child(8) > a:nth-child(1)')
            ?.getAttribute('href')
            ?.replace((process.env.WEB_CRAWLER_URL ?? '') + '/', '')
            .split('/')[1]
            .split('-')[1] ?? '1',
    )

    axiosRetry(instance as any, { retries: 3 })

    const promises: Promise<string>[] = Array.from(
        { length: maxPage },
        (_, i) =>
            instance
                .get(
                    `${apiJson.list_chapter}&tid=1&tascii=${novel_id}&tname=${title}&page=${i + 1}&totalp=${maxPage}`,
                )
                .then(({ data: { chap_list } }) => chap_list),
    )

    try {
        const responses = await Promise.all(promises)

        const chaptersPromises = responses.map(async (stringHTML: string) => {
            const HTML = await string2html(stringHTML)

            return Array.from(HTML.querySelectorAll('a'))
        })

        const chaptersHTML = await Promise.all(chaptersPromises)

        const chapters = chaptersHTML
            .flat()
            .map((chapter: HTMLAnchorElement, id) => {
                const title = chapter.textContent?.trim() ?? ''

                return {
                    id: id + 1,
                    title,
                }
            })
            .filter(({ title }) => title !== '')

        return chapters
    } catch (error) {
        console.error('An error occurred:', error)
        return []
    }
}
