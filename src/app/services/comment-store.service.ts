import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment';

@Injectable()
export class CommentStoreService {
  private comments: Comment[];
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
          'Rainers c2 langer langer langer langer langer langer langer langer langer langer langer langer v langer langer langer langervv langer langer langer  Kommentar....'
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
  }

  getByChat(chatRefId: string): Comment[] {
    console.log('get comments of chat: ', chatRefId);
    let comment_list = this.comments.filter(c => c.chatRefId === chatRefId);
    const n = 10;
    for (let i = 1; i < n; i++) {
      comment_list = comment_list.concat(comment_list);
      console.log(' n =', comment_list.length);
    }
    return comment_list;
  }
  getSubjectByChat(chatRefId: string): string {
    return 'Thema von ' + chatRefId;
  }
}
