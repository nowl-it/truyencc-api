import type { Genre } from '@/types/genre';
import { Controller } from 'tsoa';
export default class GenresController extends Controller {
    getAll(): Promise<Genre[]>;
    valid(genreId: string): Promise<Genre | {}>;
}
