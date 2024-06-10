import {Book} from './book.model';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Router} from "@angular/router";

const URL = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class BooksService {
  private books: Book[] = [];
  private booksUpdated = new Subject<Book[]>();

  constructor(private http: HttpClient, private router: Router) {
  }

  getBookUpdateListener(): Observable<Book[]> {
    return this.booksUpdated.asObservable();
  }

  getBooks(url: string): void {
    this.http.get<{ message: string, body: any }>(URL +'book/'+ url).pipe(map(data => {
      if (!data.body) {
        return;
      }
      return {
        chapter: data.body.map(book => {
          return {
            id: book._id,
            title: book.title,
            author: book.authorName,
            isbn: book.isbn,
            price: book.price
          };
        })
      };
    }))
      .subscribe((data) => {
        if (data && data.chapter) {
          this.books = data.chapter;
          this.booksUpdated.next([...this.books]);
        }
      });
  }

  addBook(title: string, isbn: string) {
    const book: Book = {id: null, title, author: null, isbn, price: 1};
    this.http.post<{ message: string, body: any }>(URL + 'book', book).subscribe((data) => {
      console.log(data);
      book.id = data.body.id;
      this.books.push(book);
      this.booksUpdated.next([...this.books]);
      this.router.navigate(['/writing-desk']);
    });
  }

  buyBook(id: string){
    console.log('id',id);
    this.http.post<{ message: string, body: any }>(URL + 'shop/buy', {id}).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/library']);
    });
  }
}
