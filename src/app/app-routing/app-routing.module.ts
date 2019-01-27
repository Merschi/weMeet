import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentListComponent } from '../comment-list/comment-list.component';
import { ChatListComponent } from '../chat-list/chat-list.component';
import { MemberListComponent } from '../member-list/member-list.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { UserhomeComponent } from '../userhome/userhome.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userhome', component: UserhomeComponent},
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
