import { Comment } from './comment';

export class Chat {
    firstComment: Comment;

    constructor(
        public id: string,
        public groupRefId: string,
        public subject: string
    ) {}
}
