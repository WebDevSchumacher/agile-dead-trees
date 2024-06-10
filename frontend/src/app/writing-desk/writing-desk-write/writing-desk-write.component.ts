import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../books/book.model";
import {NgForm} from "@angular/forms";
import {ChapterService} from "../../chapter/chapter.service";

@Component({
  selector: 'app-writing-desk-write',
  templateUrl: './writing-desk-write.component.html',
  styleUrls: ['./writing-desk-write.component.css']
})
export class WritingDeskWriteComponent implements OnInit, OnDestroy {

  env = environment;
  private sub: any;
  book: Book;
  private isLoading = false;

  constructor(public chapterService: ChapterService, private route: ActivatedRoute) {
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

  onSaveChapter(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.chapterService.addChapter(
      this.book.id,
      form.value.title,
      form.value.editor.split('</p>').join('\n').replace(/<.*?>/g, '')
    );
  }

}
