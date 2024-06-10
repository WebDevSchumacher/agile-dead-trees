import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BooksService} from '../books.service';
import {Subscription} from 'rxjs';
import {Book} from '../book.model';
import {AuthService} from '../../auth/auth.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-events-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.css']
})
export class BooksCreateComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authStatusSub: Subscription;
  book: Book;
  books: Book[] = [];

  constructor(public booksService: BooksService, private authService: AuthService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

  onSaveBook(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.booksService.addBook(
      form.value.title,
      form.value.isbn
    );
  }

}
