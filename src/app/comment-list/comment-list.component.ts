import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment';
import { ActivatedRoute } from '@angular/router';
import { CommentStoreService } from '../services/comment-store.service';



@Component({
  selector: 'wm-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit {
  comments: Comment[] = [];
	chatRefId: string;
	chatSubject: string;
  constructor(
    private route: ActivatedRoute,
    private cs: CommentStoreService
  ) { this.getChatRefId(); }

  getChatRefId(): void {
    this.chatRefId = this.route.snapshot.paramMap.get('chatId');
  }

  ngOnInit() {
    this.comments = this.cs.getByChat(this.chatRefId);
    this.chatSubject = this.cs.getSubjectByChat(this.chatRefId);
  }
}
