import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
