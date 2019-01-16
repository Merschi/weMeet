import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { ChatListComponent } from './chat-list/chat-list.component';

import { ChatStoreService } from './services/chat-store.service';
import { CommentStoreService } from './services/comment-store.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {UserService} from './services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    CommentListComponent,
    ChatListComponent,
    CommentFormComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ChatStoreService, CommentStoreService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
