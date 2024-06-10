import {Chapter} from './chapter.model';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {Router} from "@angular/router";

const URL = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class ChapterService {
  private chapters: Chapter[] = [];
  private chapterUpdated = new Subject<Chapter[]>();

  constructor(private http: HttpClient, private router: Router) {
  }

  getChapterUpdateListener(): Observable<Chapter[]> {
    return this.chapterUpdated.asObservable();
  }

  getChapter(book: string): void {
    this.http.get<{ message: string, body: any }>(URL + 'chapter/' + book).pipe(map(data => {
      if (!data.body) {
        return;
      }
      return {
        chapter: data.body.body.map(chapter => {
          return {
            id: chapter._id,
            title: chapter.title,
            text: chapter.paragraphs
          };
        })
      };
    }))
      .subscribe((data) => {
        if (data && data.chapter) {
          this.chapters = data.chapter;
          this.chapterUpdated.next([...this.chapters]);
        }
      });
  }

  addChapter(bookId: string, title: string, text: string) {
    const chapter: Chapter = {id: null, bookId, title, text};
    this.http.post<{ message: string, body: any }>(URL + 'chapter', chapter).subscribe((data) => {
      this.chapters.push(chapter);
      this.chapterUpdated.next([...this.chapters]);
      this.router.navigate(['/writing-desk']);
    });
  }
}
