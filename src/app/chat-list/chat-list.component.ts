import { Component, OnInit } from '@angular/core';
import { Chat } from '../shared/chat';
import { ChatStoreService } from '../services/chat-store.service';

@Component({
  selector: 'wm-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})

export class ChatListComponent implements OnInit {
  private chats: Chat[] = [];

  constructor( private cs: ChatStoreService ) {}

  ngOnInit() {
    this.chats = this.cs.getAll();
  }

  selectChat(chatId: string) {
    console.log('chatId: ', chatId);
    const toSelect: Chat = this.chats.find(function(this, c) { return c.getId() === chatId; });
    console.log('toSelect: ', toSelect.getSubject());
  }
}
