import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { catchError, delay, retry, retryWhen, take, throwError } from 'rxjs';
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
  myListApi = 'http://localhost:3000/my-List';

  constructor(private http: HttpClient) {}

  index() {
    // return this.http.get(this.postApi);
    // return this.http.get(this.postApi).pipe(catchError(this.handleError));
    // return this.http
    //   .get(this.postApi)
    //   .pipe(catchError(this.handleError), retry(3));
    return this.http.get(this.postApi).pipe(
      catchError(this.handleError),
      retryWhen((errors) => errors.pipe(delay(3000), take(3))),
    );
  }

  show(id: number) {
    return this.http.get<Post>(`${this.postApi}/${id}`);
  }

  handleError(error: HttpErrorResponse) {
    return throwError('Something went wrong.');
  }

  addToList(entity: Post) {
    return this.http.post<Post>(this.myListApi, entity);
  }

  getMyList() {
    return this.http.get<Post[]>(this.myListApi);
  }

  removeItemFromList(entityId: number) {
    return this.http.delete(`${this.myListApi}/${entityId}`);
  }
}
