import { Comment } from './comment';

export class Chat {
    private firstComment: Comment;

    constructor(
        public id: string,
        public groupRefId: string,
        public subject: string
    ) {}
}
