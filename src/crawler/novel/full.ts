import instance from '@/lib/instance'
import string2html from '@/lib/string2html'
import pagesJson from '@/crawler/json/pages.json'

import dotenv from 'dotenv'
import type Novel from '@/types/novel'
import { getInfo } from './global'
import axiosRetry from 'axios-retry'
dotenv.config()

export default async function NovelFull(page: number = 1): Promise<Novel[]> {
    axiosRetry(instance, { retries: 3 })

    const { data: pageString } = await instance.get(
        `${pagesJson.full}/trang-${page}`,
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
