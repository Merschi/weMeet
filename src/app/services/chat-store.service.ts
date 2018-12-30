import { Injectable } from '@angular/core';
import { Chat } from '../shared/chat';
import { MeetChat } from '../shared/meetChat';
@Injectable()
export class ChatStoreService {

  private chats: Chat[];
  private chatById: {};

  constructor() {
    this.chatById = {};
    this.chats = [
      new Chat(
        {
          id: 'c1',
          groupRefId: 'doko',
          subject: 'Weihnachstessen 2020',
          count: 5
        }
      ),
      new MeetChat(
        {
          id: 'c2',
          groupRefId: 'doko',
          subject: 'Termin KW XY',
          count: 3,
          proposed_dates: ['2018-11-11', '2018-11-12']
        }
      ),
      new Chat(
        {
          id: 'c3',
          groupRefId: 'doko',
          subject: 'laber',
          count: 27
        }
      )
    ];
    this.buildIndex();
  }

  getAll() {
    return this.chats;
  }

  buildIndex() {
    this.chats.forEach(c => {
    this.chatById[c.getId()] = c;
    });
  }

  getChatById(id): Chat {
    return this.chatById[id];
  }
}
