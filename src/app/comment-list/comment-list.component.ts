import { Component, OnInit, AfterViewInit, AfterViewChecked, OnChanges, AfterContentChecked } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Comment } from '../shared/comment';
import { ActivatedRoute } from '@angular/router';
import { CommentStoreService } from '../services/comment-store.service';



@Component({
  selector: 'wm-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit, AfterViewChecked {
  comments: Comment[] = [];
  chatRefId: string;
  chatSubject: string;
  commentCount: Number = 0;
  subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private commentS: CommentStoreService
  ) {
    this.subscription = commentS.updatedTs.subscribe( () => this.comments = this.commentS.getByChat(this.chatRefId));
    this.updateChatRefId(); }

  updateChatRefId(): void {
    this.chatRefId = this.route.snapshot.paramMap.get('chatId');
  }

  ngOnInit() {
    this.comments = this.commentS.getByChat(this.chatRefId);
    this.chatSubject = this.commentS.getSubjectByChat(this.chatRefId);
    this.commentCount = this.comments.length;
    console.log('onInit');
  }

  ngAfterViewChecked() {
    const container = document.getElementById('comment-container');
    container.scrollTop = container.scrollHeight;
    console.log('onChanges scrollHeight= ', container.scrollHeight, 'scrollTop: ', container.scrollTop);
  }
}
