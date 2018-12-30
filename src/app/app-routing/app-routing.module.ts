import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentListComponent } from '../comment-list/comment-list.component';
import { ChatListComponent } from '../chat-list/chat-list.component';
import { MemberListComponent } from '../member-list/member-list.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';

const routes: Routes = [
  { path: 'comments/:chatId', component: CommentListComponent },
  { path: 'chats', component: ChatListComponent },
  { path: 'members', component: MemberListComponent},
  { path: 'addcomment/:chatId', component: CommentFormComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}
