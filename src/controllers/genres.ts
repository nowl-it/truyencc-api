import Genres from '@/crawler/genres'
import type { Genre } from '@/types/genre'
import { Controller, Get, Route, Tags } from 'tsoa'

@Route('genre')
@Tags('Genre')
export default class GenresController extends Controller {
    @Get('/')
    public async getAll(): Promise<Genre[]> {
        const genres = await Genres()
        if (genres.length > 0) return genres
        return []
    }

    public async valid(genreId: string): Promise<Genre | {}> {
        const genres = await this.getAll()
        const genre = genres.find(genre => genre.id === genreId)
        if (genre) return genre
        return {}
    }
}
