import instance from '@/lib/instance'
import string2html from '@/lib/string2html'

import dotenv from 'dotenv'
import NovelChapter from './chapter/list'
import axiosRetry from 'axios-retry'
dotenv.config()

export default async function NovelInfo(novel_id: string) {
    axiosRetry(instance as any, { retries: 10 })
    try {
        const { data: pageString } = await instance.get(novel_id)

        const pageHTML = await string2html(pageString)

        const title = pageHTML.querySelector('.title')?.textContent ?? ''

        const cover_img_url = pageHTML
            .querySelector('.book > img:nth-child(1)')
            ?.getAttribute('src')

        const description = pageHTML.querySelector('.desc-text')?.innerHTML

        const authorHTML: HTMLAnchorElement = pageHTML.querySelector(
            '.info > div:nth-child(1) > a:nth-child(2)',
        ) as HTMLAnchorElement

        const author = authorHTML?.textContent
        const author_id = (authorHTML.getAttribute('href') as string)
            .replace(process.env.WEB_CRAWLER_URL ?? '', '')
            .replace('/tac-gia', '')
            .replaceAll('/', '')

        const genres = Array.from(
            pageHTML.querySelectorAll('.info > div:nth-child(2) > a'),
        ).map(genre => ({
            name: genre.textContent,
            id: (genre.getAttribute('href') as string)
                .replace(process.env.WEB_CRAWLER_URL ?? '', '')
                .replace('/the-loai', '')
                .replaceAll('/', ''),
        }))

        const cre = pageHTML.querySelector('.source')?.textContent

        const status = pageHTML.querySelector('.text-success')?.textContent

        return {
            novel_id,
            title,
            cover_img_url,
            description,
            author: {
                name: author,
                id: author_id,
            },
            genres,
            cre,
            status,
        }
    } catch (error: any) {
        console.log('ERROR WHILE FETCHING NOVEL INFO!', novel_id)

        return {
            error: error.message,
        }
    }
}
