import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Comment } from '../shared/comment';
import * as moment from 'moment';
import { ChatStoreService } from '../services/chat-store.service';

const chatS: ChatStoreService = new ChatStoreService;

@Injectable()
export class CommentStoreService {
  private comments: Comment[];

  updatedTs = new Subject<string>();

  constructor() {
    this.comments =
      [
        new Comment(
          'Rainer',
          'c1',
          '2018-03-16 17:00',
          'Rainers c1 Kommentar....'
        ),
        new Comment(
          'Ludger',
          'c1',
          '2018-03-16 17:01',
          'Ludgers c1 Kommentar....'
        ),
        new Comment(
          'Stephan',
          'c1',
          '2018-03-16 17:02',
          'Stephans c1 Kommentar....'
        ),
        new Comment(
          'Rainer',
          'c2',
          '2018-03-16 17:00',
          'Rainers c2 langer langer langer langer langer langer langer langer langer langer langer langer v langer' +
          ' langer langer langervv langer langer langer  Kommentar....'
        ),
        new Comment(
          'Ludger',
          'c2',
          '2018-03-16 17:01',
          'Ludgers c2 Kommentar....'
        ),
        new Comment(
          'Stephan',
          'c2',
          '2018-03-16 17:02',
          'Stephans c2 Kommentar....'
        ),
        new Comment(
          'Stephan',
          'c3',
          '2018-11-10 17:03',
          'Stephans c3 Kommentar....'
        ),
        new Comment(
          'Ludger',
          'c3',
          '2018-10-28 17:01',
          'Ludgers c3 Kommentar....'
        )
      ];
      this.updateTs();
  }

  private updateTs() {
    this.updatedTs.next(moment.now.toString());
  }

  getByChat(chatRefId: string): Comment[] {
    console.log('get comments of chat: ', chatRefId);
    return this.comments.filter(c => c.chatRefId === chatRefId);
  }

  getSubjectByChat(chatRefId: string): string {
    return chatS.getChatById(chatRefId).getSubject();
  }

  add(comment: string, chatRefId: string, username: string) {
    this.comments.push(new Comment(username,
      chatRefId,
      moment().toISOString(),
      comment));

    this.updateTs();
  }
}
