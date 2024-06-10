import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Book} from "../books/book.model";
import {BooksService} from "../books/books.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  private booksSub: Subscription;
  books: Book[] = []
  loading = false;

  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    this.loading = true;
    this.booksService.getBooks('');
    this.booksSub = this.booksService.getBookUpdateListener().subscribe((books) => {
      this.books = books;
      this.loading = false;
    });
  }

}
