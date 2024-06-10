import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Book} from "../books/book.model";
import {BooksService} from "../books/books.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  private booksSub: Subscription;
  books: Book[] = []
  loading = false;

  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    this.loading = true;
    this.booksService.getBooks('user');
    this.booksSub = this.booksService.getBookUpdateListener().subscribe((books) => {
      this.books = books;
      this.loading = false;
    });
  }

}
