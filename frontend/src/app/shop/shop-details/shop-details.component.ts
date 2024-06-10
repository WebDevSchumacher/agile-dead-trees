import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Book} from "../../books/book.model";
import {ActivatedRoute} from "@angular/router";
import {BooksService} from "../../books/books.service";

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit, OnDestroy {

  env = environment;
  private sub: any;
  book: Book;
  public isLoading = false;

  constructor(private route: ActivatedRoute, private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.sub = this.route.params.subscribe(params => {
      const book: Book = {id: params.id, title: params.title, author: params.author, isbn: params.isbn, price: 1};
      this.book = book;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBuy(){
    this.booksService.buyBook(this.book.id);
  }

}
