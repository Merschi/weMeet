import { Comment } from './comment';

export class Chat {
    private firstComment: Comment;
    public lastCommentTime = 'unknown';

    constructor(
        public id: string,
        public groupRefId: string,
        public subject: string,
        public count: number
    ) {}

    hasDates (): boolean {
      return false;
    }
}
