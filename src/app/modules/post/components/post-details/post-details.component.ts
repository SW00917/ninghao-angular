import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/post.model';
// import { posts } from '../../posts';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  entity!: Post;

  // constructor(private route: ActivatedRoute) {}
  // constructor(
  //   private route: ActivatedRoute,
  //   private postService: PostService,
  // ) {}
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
  ) {}

  // ngOnInit() {
  //   this.route.paramMap.subscribe((params) => {
  //     const postId = Number(params.get('id'));
  //     console.log(postId);

  //     // this.entity = posts.find((post) => post.id === postId) as Post;
  //     this.entity = this.postService.show(postId) as Post;
  //   });
  // }

  ngOnInit() {
    this.route.data.subscribe((data: { entity?: Post }) => {
      this.entity = data.entity as Post;
    });
  }

  // gotoPost() {
  //   this.router.navigate(['/posts']);
  // }
  gotoPost(entity: Post) {
    this.router.navigate(['/posts', { id: entity.id }]);
  }
}
