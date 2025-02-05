import instance from '@/lib/instance'
import string2html from '@/lib/string2html'
import type { Read } from '@/types/read'
import dotenv from 'dotenv'

dotenv.config()

export default async function NovelContent(
    novel_id: string,
    chapter: number,
): Promise<Read> {
    const { data: pageHTML } = await instance.get(
        `${novel_id}/chuong-${chapter}`,
    )

    const HTML = await string2html(pageHTML)

    const bodyHTML = HTML.querySelector('.chapter-c') as HTMLDivElement

    bodyHTML.removeChild(
        bodyHTML.querySelector('#ads-chapter-pc-top') as HTMLDivElement,
    )

    const content = bodyHTML.innerHTML

    const title = (HTML.querySelector('.chapter-title') as HTMLAnchorElement)
        .title

    const prev_chapter = parseInt(
        (HTML.querySelector('#prev_chap') as HTMLAnchorElement).title.replace(
            'Chương ',
            '',
        ),
    )

    const next_chapter = parseInt(
        (HTML.querySelector('#next_chap') as HTMLAnchorElement).title.replace(
            'Chương ',
            '',
        ),
    )

    return {
        title,
        prev_chapter,
        next_chapter,
        content,
    }
}
