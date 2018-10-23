import { Injectable } from '@angular/core';
import { Chat } from '../shared/chat';
import { MeetChat } from '../shared/meetChat';
@Injectable()
export class ChatStoreService {

  chats: Chat[];
  constructor() {
    this.chats = [
      new Chat(
        'c1',
        'doko',
        'Weihnachstessen 2020',
        5
      ),
      new MeetChat(
        'c2',
        'doko',
        'Termin KW XY',
        3,
        ['Fr 16.02.2018', 'Sa 17.02.2018' ]
      ),
      new Chat(
        'c3',
        'doko',
        'laber',
        27
      )
    ];
  }

  getAll() {
    return this.chats;
  }
}
