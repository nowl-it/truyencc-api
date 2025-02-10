import instance from '@/lib/instance'
import axiosRetry from 'axios-retry'
import string2html from '@/lib/string2html'
import pagesJson from '@/crawler/json/pages.json'
import { getInfo } from './novel/global'
import Novel from '@/types/novel'

export default async function Searching(query: string): Promise<Novel[]> {
    axiosRetry(instance, { retries: 3 })

    try {
        const { data: search } = await instance.get(pagesJson.search + query)
        const searchHTML = await string2html(search)

        const novels: NodeListOf<HTMLDivElement> = searchHTML.querySelectorAll(
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
    } catch (error) {
        console.error(error)
        return []
    }
}
