import instance from '@/lib/instance'
import string2html from '@/lib/string2html'
import dotenv from 'dotenv'
import apiJson from '@/crawler/json/api.json'
import axiosRetry from 'axios-retry'

dotenv.config()

export default async function NovelChapter(novel_id: string, page: number = 1) {
    axiosRetry(instance as any, { retries: 10 })

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

    try {
        const chaptersHTML = HTML.querySelectorAll(
            '.list-chapter > li > a',
        ) as NodeListOf<HTMLAnchorElement>

        const chapters = Array.from(chaptersHTML)
            .map((chapter: HTMLAnchorElement) => {
                const title = chapter.textContent?.trim() ?? ''
                const id = parseInt(
                    chapter.textContent?.split(':')[0].split(' ')[1] as string,
                )

                return {
                    id,
                    title,
                }
            })
            .filter(({ title }) => title !== '')

        return {
            chapters,
            page,
            maxPage,
        }
    } catch (error) {
        console.error('ERROR WHILE FETCHING NOVEL CHAPTER LIST!')
        return {
            chapters: [],
            page,
            maxPage,
        }
    }
}
