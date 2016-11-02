import { Injectable } from '@angular/core';
import { Book, mockBooks } from '../mocks/books';
import { categories, Category } from '../mocks/categories';

@Injectable()
export class AppService {
    getBooks(): Promise<Book[]> {
        return Promise.resolve(mockBooks);
    }

    getCategories(): Promise<Category[]> {
        return Promise.resolve(categories);
    }
}