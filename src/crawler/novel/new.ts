import instance from '@/lib/instance'
import string2html from '@/lib/string2html'
import pagesJson from '@/crawler/json/pages.json'

import dotenv from 'dotenv'
import { getInfo } from './global'
import type Novel from '@/types/novel'
dotenv.config()

export default async function NovelNew(page: number = 1): Promise<Novel[]> {
    const { data: pageString } = await instance.get(
        `${pagesJson.new}/trang-${page}`,
    )

    const pageHTML = await string2html(pageString)

    const novels: NodeListOf<HTMLDivElement> = pageHTML.querySelectorAll(
        'div.col-sm-12:nth-child(1) > div:nth-child(2) > div.row',
    ) as NodeListOf<HTMLDivElement>

    return Array.from(novels).reduce(
        async (promise, novel) => {
            await promise

            return [...(await promise), await getInfo(novel as HTMLDivElement)]
        },
        Promise.resolve([] as Novel[]),
    )
}
