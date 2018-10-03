import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment';



@Component({
  selector: 'wm-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments: Comment[] = [];
  constructor() { }


  ngOnInit() {
    this.comments.push(
      new Comment(
        'member_01',
        'chat1',
        '10.05.2018 10:43',
        'comment text'
      ));
      this.comments.push(
        new Comment(
        'member_03',
        'chat1',
        '10.05.2018 10:48',
        'comment text zwei'
      ));
      this.comments.push(
        new Comment(
        'member_02',
        'chat1',
        '10.05.2018 10:40',
        'comment text drei'
      ));
  }
}
