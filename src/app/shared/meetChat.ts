import { Chat } from './chat';
import { Accept } from './accept';

export class MeetChat extends Chat {
  private acceptances: Accept[] = [];
  constructor(
    id: string,
    groupRefId: string,
    subject: string,
    public proposedDates: [string]
  ) { super(id, groupRefId, subject); }
}
