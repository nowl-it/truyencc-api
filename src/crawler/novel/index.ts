import dotenv from 'dotenv'
import type Novel from '@/types/novel'
import NovelFull from './full'
import NovelNew from './new'
import NovelHot from './hot'
import NovelGenre from './genre'
dotenv.config()

type NovelCrawlerType = 'full' | 'info' | 'new' | 'hot' | 'genre' | 'chapter'

export default async function NovelCrawler(
    type: NovelCrawlerType,
    page: number = 1,
    arg: string = '',
): Promise<Novel[]> {
    switch (type) {
        case 'full':
            return await NovelFull(page)
        case 'new':
            return await NovelNew(page)
        case 'hot':
            return await NovelHot(page)
        case 'genre':
            return await NovelGenre(arg, page)
        default:
            return []
    }
}
