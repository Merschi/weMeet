import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ChatStoreService } from '../services/chat-store.service';
import { CommentStoreService } from '../services/comment-store.service';


@Component({
  selector: 'wm-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  _commentForm: FormGroup = new FormGroup({
    comment: new FormControl(null, Validators.required)
  });
  chatRefId: string;
  chatSubject: string;
  cs: ChatStoreService;
  username: string;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _commentStoreService: CommentStoreService,
    private _userService: UserService
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

  addComment() {
    if (!this._commentForm.valid) {
      console.log('invalid form!');
      return;
    }

    this._userService.getUserName()
    .subscribe(
      data => {
        this.username = data.toString();
        this._commentStoreService.add(this._commentForm.value.comment, this.chatRefId, this.username);
        this._router.navigate(['/comments', this.chatRefId]);
      },
      error => { this.username = ''; }
    );
  }

  ngOnInit() { }
}
