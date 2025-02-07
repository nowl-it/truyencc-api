import type { Chapter } from '@/types/chapter';
import type Novel from '@/types/novel';
import type { Read } from '@/types/read';
import { Controller } from 'tsoa';
export default class NovelController extends Controller {
    getFirstPage(): Promise<Novel[]>;
    getPage(page: number): Promise<Novel[]>;
    getNewFirstPage(): Promise<Novel[]>;
    getNewPage(page: number): Promise<Novel[]>;
    getHotFirstPage(): Promise<Novel[]>;
    getHotPage(page: number): Promise<Novel[]>;
    getGenreFirstPage(genre: string): Promise<Novel[]>;
    getGenrePage(genre: string, page: number): Promise<Novel[]>;
    getNovel(id: string): Promise<Novel | {}>;
    getChapter(id: string): Promise<Chapter[]>;
    readChapter(id: string, chapter: number): Promise<Read>;
}
