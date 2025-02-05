import instance from '@/lib/instance'
import string2html from '@/lib/string2html'
import type { Genre } from '@/types/genre'

export default async function Genres(): Promise<Genre[]> {
    try {
        const { data: homeString } = await instance.get('/')
        const homeHTML = await string2html(homeString)

        const genres: NodeListOf<HTMLAnchorElement> = homeHTML.querySelectorAll(
            '.multi-column > div:nth-child(1) a',
        ) as NodeListOf<HTMLAnchorElement>

        const genresArray = Array.from(genres).map(option => ({
            name: option.text,
            id: option.href.split('/')[option.href.split('/').length - 2] ?? '',
        }))

        return genresArray
    } catch (error) {
        console.error(error)
        return []
    }
}
