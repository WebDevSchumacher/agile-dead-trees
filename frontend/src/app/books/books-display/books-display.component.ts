import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book.model';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.css']
})
export class BooksDisplayComponent implements OnInit {

  @Input()
  book: Book;
  @Input()
  url: string;
  env = environment;

  constructor() { }

  ngOnInit(): void {
    console.log("display",this.book)
  }

}
