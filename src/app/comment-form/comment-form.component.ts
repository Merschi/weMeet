import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'wm-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  chatRefId: string;
  chatSubject: string;
  constructor(
    private route: ActivatedRoute
  ) { this.getChatRefId(); }

  getChatRefId(): void {
    this.chatRefId = this.route.snapshot.paramMap.get('chatId');
  }

  ngOnInit() {}
}
