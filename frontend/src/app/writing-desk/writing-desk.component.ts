import { Component, OnInit } from '@angular/core';
import {BooksService} from "../books/books.service";
import {Subscription} from "rxjs";
import {Book} from "../books/book.model";

@Component({
  selector: 'app-writing-desk',
  templateUrl: './writing-desk.component.html',
  styleUrls: ['./writing-desk.component.css']
})
export class WritingDeskComponent implements OnInit {

  private booksSub: Subscription;
  books: Book[] = []
  loading = false;

  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    this.loading = true;
    this.booksService.getBooks('author');
    this.booksSub = this.booksService.getBookUpdateListener().subscribe((books) => {
      this.books = books;
      this.loading = false;
    });
  }

}
