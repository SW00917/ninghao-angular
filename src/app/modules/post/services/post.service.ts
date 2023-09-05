import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Post } from '../models/post.model';
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
    return this.http.get(this.postApi);
  }

  show(id: number) {}
}
