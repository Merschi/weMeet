import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatStoreService } from '../services/chat-store.service';



@Component({
  selector: 'wm-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  chatRefId: string;
  chatSubject: string;
  cs: ChatStoreService;
  constructor(
    private route: ActivatedRoute
  ) {
    this.cs = new ChatStoreService;
    this.updateChatRefId();
    this.updateChatSubject();
  }

  updateChatRefId(): void {
    this.chatRefId = this.route.snapshot.paramMap.get('chatId');
  }

  updateChatSubject(): void {
    this.chatSubject = this.cs.getChatById(this.chatRefId).getSubject();
  }

  ngOnInit() { }
}
