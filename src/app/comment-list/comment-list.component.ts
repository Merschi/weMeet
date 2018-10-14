import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'wm-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit {
  comments: Comment[] = [];
  chatRefId: string;
  constructor(
    private route: ActivatedRoute
  ) { }

  getChatRefId(): void {
    this.chatRefId = this.route.snapshot.paramMap.get('chatId');
  }

  ngOnInit() {
    this.getChatRefId();
    // TODO: Kommentare zum chatRefId per service holen!
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
