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
          '16.3.2018 17:00',
          'Rainers c1 Kommentar....'
        ),
        new Comment(
          'Ludger',
          'c1',
          '16.3.2018 17:01',
          'Ludgers c1 Kommentar....'
        ),
        new Comment(
          'Stephan',
          'c1',
          '16.3.2018 17:02',
          'Stephans c1 Kommentar....'
        ),
        new Comment(
          'Rainer',
          'c2',
          '16.3.2018 17:00',
          'Rainers c2 Kommentar....'
        ),
        new Comment(
          'Ludger',
          'c2',
          '16.3.2018 17:01',
          'Ludgers c2 Kommentar....'
        ),
        new Comment(
          'Stephan',
          'c2',
          '16.3.2018 17:02',
          'Stephans c2 Kommentar....'
        ),
        new Comment(
          'Stephan',
          'c3',
          '18.3.2018 17:02',
          'Stephans c3 Kommentar....'
        )
      ];
  }

  getByChat( chatRefId: string) {
    console.log('get comments of chat: ', chatRefId);
    return this.comments.filter( c => c.chatRefId === chatRefId);
  }
}
