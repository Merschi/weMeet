import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment';



@Component({
  selector: 'wm-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments: Comment[];
  constructor() { }


  ngOnInit() {
    this.comments = [
      new Comment(
        'M1',
        'chat1',
        'comment text',
        '10.05.2018 10:43'
      ),
      new Comment(
        'M2',
        'chat1',
        'comment text zwei',
        '10.05.2018 10:48'
      )
    ];

  }
}
