import NovelCrawler from '@/crawler/novel'
import NovelChapter from '@/crawler/novel/chapter/list'
import NovelContent from '@/crawler/novel/chapter/read'
import NovelInfo from '@/crawler/novel/info'
import type { Chapter } from '@/types/chapter'
import type Novel from '@/types/novel'
import type { Read } from '@/types/read'
import { Controller, Get, Route, Tags } from 'tsoa'

@Route('novel')
@Tags('Novel')
export default class NovelController extends Controller {
    @Get('/')
    @Tags('Novel', 'All')
    public async getFirstPage(): Promise<Novel[]> {
        const novels = await NovelCrawler('full')

        if (novels.length > 0) return novels
        return []
    }

    @Get('/trang-{page}')
    @Tags('Novel', 'All')
    public async getPage(page: number): Promise<Novel[]> {
        const novels = await NovelCrawler('full', page)

        if (novels.length > 0) return novels
        return []
    }

    @Get('/new')
    @Tags('Novel', 'New Novel')
    public async getNewFirstPage(): Promise<Novel[]> {
        const novels = await NovelCrawler('new')

        if (novels.length > 0) return novels
        return []
    }

    @Get('/new/trang-{page}')
    @Tags('Novel', 'New Novel')
    public async getNewPage(page: number): Promise<Novel[]> {
        const novels = await NovelCrawler('new', page)

        if (novels.length > 0) return novels
        return []
    }

    @Get('/hot')
    @Tags('Novel', 'Hot Novel')
    public async getHotFirstPage(): Promise<Novel[]> {
        const novels = await NovelCrawler('hot')

        if (novels.length > 0) return novels
        return []
    }

    @Get('/hot/trang-{page}')
    @Tags('Novel', 'Hot Novel')
    public async getHotPage(page: number): Promise<Novel[]> {
        const novels = await NovelCrawler('hot', page)

        if (novels.length > 0) return novels
        return []
    }

    @Get('/genre/{genre}')
    @Tags('Novel', 'Filter Novel by Genre')
    public async getGenreFirstPage(genre: string): Promise<Novel[]> {
        const novels = await NovelCrawler('genre', 1, genre)

        if (novels.length > 0) return novels
        return []
    }

    @Get('/genre/{genre}/trang-{page}')
    @Tags('Novel', 'Filter Novel by Genre')
    public async getGenrePage(genre: string, page: number): Promise<Novel[]> {
        const novels = await NovelCrawler('genre', page, genre)

        if (novels.length > 0) return novels
        return []
    }

    @Get('/{id}')
    @Tags('Novel', 'Detail Novel')
    public async getNovel(id: string): Promise<Novel | {}> {
        const novel = await NovelInfo(id)

        if (novel) return novel
        return {}
    }

    @Get('/{id}/chapter')
    @Tags('Novel', 'Novel Chapter')
    public async getChapter(id: string): Promise<Chapter> {
        const chapter = await NovelChapter(id)
        return chapter
    }

    @Get('/{id}/chapter/trang-{page}')
    @Tags('Novel', 'Novel Chapter Page')
    public async getChapterByPage(id: string, page: number): Promise<Chapter> {
        const chapter = await NovelChapter(id, page)
        return chapter
    }

    @Get('/{id}/chapter/{chapter}')
    @Tags('Novel', 'Read Novel')
    public async readChapter(id: string, chapter: number): Promise<Read> {
        const read = await NovelContent(id, chapter)
        return read
    }
}
