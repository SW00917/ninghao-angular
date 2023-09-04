import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'Posts';
  entities = [
    { title: '男歌手', body: '伍佰' },
    { title: '女歌手', body: '白安' },
    { title: '團體' },
  ];

  constructor() {}

  ngOnInit() {}

  removeItem(item: number) {
    console.log('remove...');
    this.entities = this.entities.filter((entity, index) => {
      return index !== item;
    });
  }
}
