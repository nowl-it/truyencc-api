import type Novel from '@/types/novel';
type NovelCrawlerType = 'full' | 'info' | 'new' | 'hot' | 'genre' | 'chapter';
export default function NovelCrawler(type: NovelCrawlerType, page?: number, arg?: string): Promise<Novel[]>;
export {};
