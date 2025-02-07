export default function NovelChapter(novel_id: string): Promise<{
    id: number;
    title: string;
}[]>;
