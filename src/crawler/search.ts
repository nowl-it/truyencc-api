import instance from '@/lib/instance'
import Search from '@/types/search'
import axiosRetry from 'axios-retry'
import apiJson from '@/crawler/json/api.json'
import string2html from '@/lib/string2html'

export default async function Searching(query: string): Promise<Search[]> {
    axiosRetry(instance, { retries: 3 })

    try {
        const { data: search } = await instance.get(apiJson.search + query)
        const searchHTML = await string2html(search)

        const searchResults: NodeListOf<HTMLAnchorElement> =
            searchHTML.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>

        const results = Array.from(searchResults)
            .map(option => ({
                novel_id: option.href
                    .replace(process.env.WEB_CRAWLER_URL ?? '', '')
                    .split('/')[1],
                title: option.title,
            }))
            .filter(option => option.novel_id !== 'tim-kiem')

        return results
    } catch (error) {
        console.error(error)
        return []
    }
}
