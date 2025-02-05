import type Novel from '@/types/novel'
import NovelInfo from './info'

export async function getInfo(novel: HTMLDivElement): Promise<Novel> {
    const title =
        (
            novel.querySelector(
                'div.col-xs-3 > div > div.lazyimg',
            ) as HTMLDivElement
        ).getAttribute('data-alt') ?? ''

    const novel_id =
        (
            novel.querySelector(
                'div.col-xs-7 > div > h3 > a',
            ) as HTMLAnchorElement
        )
            .getAttribute('href')
            ?.replace(process.env.WEB_CRAWLER_URL ?? '', '')
            .replaceAll('/', '') ?? ''

    const newest_chapter = parseInt(
        (
            (novel.querySelector('div.col-xs-2 > div > a') as HTMLAnchorElement)
                .textContent as string
        ).replace('Chương ', ''),
    )

    const { cover_img_url } = await NovelInfo(novel_id)

    return {
        cover_img_url: cover_img_url ?? '',
        title,
        novel_id,
        newest_chapter,
    }
}
