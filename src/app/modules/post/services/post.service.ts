import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { catchError, throwError } from 'rxjs';
// import { posts } from '../posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // entities: Post[];

  // constructor() {
  //   this.entities = posts;
  // }

  // index() {
  //   return this.entities;
  // }

  // show(id: number) {
  //   return this.entities.find((post) => post.id === id);
  // }

  postApi = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  index() {
    // return this.http.get(this.postApi);
    return this.http.get(this.postApi).pipe(catchError(this.handleError));
  }

  show(id: number) {
    return this.http.get<Post>(`${this.postApi}/${id}`);
  }

  handleError(error: HttpErrorResponse) {
    return throwError('Something went wrong.');
  }
}
