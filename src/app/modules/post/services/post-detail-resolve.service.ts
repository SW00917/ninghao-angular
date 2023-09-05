import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from './post.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostDetailResolveService implements Resolve<Post> {
  constructor(private postService: PostService) {}

  // resolve(route: ActivatedRouteSnapshot): Post {
  //   console.log('Post detail resolve service.');

  //   const postId = Number(route.paramMap.get('id'));

  //   // return {
  //   //   id: 1,
  //   //   title: 'hello',
  //   // };
  //   return this.postService.show(postId) as Post;
  // }

  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    console.log('Post detail resolve service.');

    const postId = Number(route.paramMap.get('id'));

    // return {
    //   id: 1,
    //   title: 'hello',
    // };
    return this.postService.show(postId);
  }
}
