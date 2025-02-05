import type Novel from '@/types/novel'

const IMAGE_WIDTH = 430
const IMAGE_HEIGHT = 624

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

    const cover_img_url = (
        (
            novel.querySelector(
                'div.col-xs-3 > div > div.lazyimg',
            ) as HTMLDivElement
        ).getAttribute('data-image') ?? ''
    ).replace(/=w\d+-h\d+/, `=w${IMAGE_WIDTH}-h${IMAGE_HEIGHT}`)

    const newest_chapter = parseInt(
        (
            (novel.querySelector('div.col-xs-2 > div > a') as HTMLAnchorElement)
                .textContent as string
        ).replace('Chương ', ''),
    )

    return {
        cover_img_url: cover_img_url ?? '',
        title,
        novel_id,
        newest_chapter,
    }
}
