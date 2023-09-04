import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { posts } from './posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'Posts';
  // entities = [
  //   { id: 1, title: '男歌手', body: '伍佰' },
  //   { id: 2, title: '女歌手', body: '白安' },
  //   { id: 3, title: '團體' },
  // ];
  entities: Post[];

  constructor() {
    this.entities = posts;
  }

  ngOnInit() {}

  // removeItem(item: number) {
  //   console.log('remove...');
  //   this.entities = this.entities.filter((entity, index) => {
  //     return index !== item;
  //   });
  // }

  removeItem(item: Post) {
    console.log('remove...');
    this.entities = this.entities.filter((entity) => {
      return entity.id !== item.id;
    });
  }
}
