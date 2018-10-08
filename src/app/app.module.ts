import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { ChatListComponent } from './chat-list/chat-list.component';

import { ChatStoreService } from './services/chat-store.service';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    CommentListComponent,
    ChatListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChatStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
