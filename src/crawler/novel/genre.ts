import instance from '@/lib/instance'
import string2html from '@/lib/string2html'
import pagesJson from '@/crawler/json/pages.json'

import dotenv from 'dotenv'
import GenresController from '@/controllers/genres'
import type Novel from '@/types/novel'
import { getInfo } from './global'
import type { Genre } from '@/types/genre'
dotenv.config()

export default async function NovelGenre(
    genreId: string,
    page: number = 1,
): Promise<Novel[]> {
    const genres = new GenresController()
    const genreValid = await genres.valid(genreId)

    if (!(Object.keys(genreValid).length > 0)) return []

    const genre = (genreValid as Genre).id

    const { data: pageString } = await instance.get(
        `${pagesJson.genre}/${genre}/trang-${page}`,
    )

    const pageHTML = await string2html(pageString)

    const novels: NodeListOf<HTMLDivElement> = pageHTML.querySelectorAll(
        'div.col-sm-12:nth-child(1) > div:nth-child(2) > div.row',
    ) as NodeListOf<HTMLDivElement>

    return Array.from(novels)
        .filter(novel =>
            novel.querySelector('div.col-xs-3 > div > div.lazyimg'),
        )
        .reduce(
            async (promise, novel) => {
                await promise

                return [
                    ...(await promise),
                    await getInfo(novel as HTMLDivElement),
                ]
            },
            Promise.resolve([] as Novel[]),
        )
}
