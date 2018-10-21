import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { ChatListComponent } from './chat-list/chat-list.component';

import { ChatStoreService } from './services/chat-store.service';
import { CommentStoreService } from './services/comment-store.service';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    CommentListComponent,
    ChatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ChatStoreService, CommentStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
