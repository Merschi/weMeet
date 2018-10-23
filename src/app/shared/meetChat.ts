import { Chat } from './chat';
import { Accept } from './accept';

export class MeetChat extends Chat {
  private acceptances: Accept[] = [];
  constructor(
    id: string,
    groupRefId: string,
    subject: string,
    count: number,
    public proposedDates: string[]
  ) { super(id, groupRefId, subject, count); }
}
