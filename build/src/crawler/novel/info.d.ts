export default function NovelInfo(novel_id: string): Promise<{
    novel_id: string;
    title: string;
    cover_img_url: string | null | undefined;
    description: string | undefined;
    author: {
        name: string | null;
        id: string;
    };
    genres: {
        name: string | null;
        id: string;
    }[];
    cre: string | null | undefined;
    status: string | null | undefined;
    chapters: {
        id: number;
        title: string;
    }[];
    error?: undefined;
} | {
    error: any;
    novel_id?: undefined;
    title?: undefined;
    cover_img_url?: undefined;
    description?: undefined;
    author?: undefined;
    genres?: undefined;
    cre?: undefined;
    status?: undefined;
    chapters?: undefined;
}>;
