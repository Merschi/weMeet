import { Component, OnInit } from '@angular/core';
import { Chat } from '../shared/chat';
import { MeetChat } from '../shared/meetChat';

@Component({
  selector: 'wm-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  private chats: Chat[] = [];

  constructor() { }

  ngOnInit() {
    this.chats.push(
      new Chat(
        'c1',
        'doko',
        'Weihnachstessen 2020'
      )
    );
    this.chats.push(
      new MeetChat(
        'c2',
        'doko',
        'Termin KW XY',
        ['Fr 16.02.', 'Sa 16.02.' ]
      )
    );
    this.chats.push(
      new Chat(
        'c3',
        'doko',
        'laber'
      )
    );
  }
}
