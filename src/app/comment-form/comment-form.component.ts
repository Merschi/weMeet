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
  username: string;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _commentStoreService: CommentStoreService,
    private _chatStoreService: ChatStoreService,
    private _userService: UserService
  ) {
    this.updateChatRefId();
    this.updateChatSubject();
  }

  updateChatRefId(): void {
    this.chatRefId = this.route.snapshot.paramMap.get('chatId');
    console.log('comment form: chatRefId: ', this.chatRefId);
  }

  updateChatSubject(): void {
    this.chatSubject = this._chatStoreService.getChatById(this.chatRefId).getSubject();
  }

  addComment() {
    const textArea: HTMLTextAreaElement = <HTMLTextAreaElement>document.querySelector('textarea#comment');

    console.log('add comment');
    if (!this._commentForm.valid) {
      console.log('invalid form!');
      return;
    }

    console.log('add comment');
    this._userService.getUserName()
    .subscribe(
      data => {
        this.username = data.toString();
        this._commentStoreService.add(this._commentForm.value.comment, this.chatRefId, this.username);
        console.log('add comment: ', JSON.stringify(this._commentForm.value.comment), 'User: ', this.username);
        this._router.navigate(['/comments', this.chatRefId]);
      },
      error => { this.username = ''; }
    );

    textArea.value = '';
    textArea.style.height = '2em';
  }

  autoGrowTextArea(textField: HTMLElement) {
    console.log('autoGrowTextArea', textField);
    if (textField.clientHeight < textField.scrollHeight) {
      textField.style.height = textField.scrollHeight + 'px';
      if (textField.clientHeight < textField.scrollHeight) {
        textField.style.height =
          (textField.scrollHeight * 2 - textField.clientHeight) + 'px';
      }
    }
  }

  ngOnInit() { }
}
