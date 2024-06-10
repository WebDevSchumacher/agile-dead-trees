import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Book} from "../../books/book.model";
import {ActivatedRoute} from "@angular/router";
import {ChapterService} from "../../chapter/chapter.service";
import {Chapter} from "../../chapter/chapter.model";

@Component({
  selector: 'app-library-read',
  templateUrl: './library-read.component.html',
  styleUrls: ['./library-read.component.css']
})
export class LibraryReadComponent implements OnInit, OnDestroy {

  env = environment;
  private bookSub: any;
  private chapterSub: any;
  book: Book;
  chapter: Chapter[] = [];
  public isLoading = false;

  constructor(private route: ActivatedRoute, private chapterService: ChapterService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.bookSub = this.route.params.subscribe(params => {
      const book: Book = {id: params.id, title: params.title, author: params.author, isbn: params.isbn, price: 1};
      this.book = book;
      this.chapterService.getChapter(book.id);
      this.chapterSub = this.chapterService.getChapterUpdateListener().subscribe(chapters => {
        this.chapter = chapters;
        this.isLoading = false;
      });
    });
  }

  ngOnDestroy() {
    this.bookSub.unsubscribe();
    this.chapterSub.unsubscribe();
  }

}
