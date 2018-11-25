import { Comment } from './comment';

interface ChatEntry {
  id: string;
  groupRefId: string;
  subject: string;
  count: number;
}

export class Chat {
    private firstComment: Comment;
    public lastCommentTime = 'unknown';
    private id: string;
    private groupRefId: string;
    private subject: string;
    private count: number;

    constructor(
      entry: ChatEntry
    ) {
      this.id = entry.id;
      this.groupRefId = entry.groupRefId;
      this.subject = entry.subject;
      this.count = entry.count;
    }
    getSubject (): string {
      return this.subject;
    }
    getId (): string {
      return this.id;
    }
    hasDates (): boolean {
      return false;
    }
}
