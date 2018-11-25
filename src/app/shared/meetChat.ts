import { Chat } from './chat';
import { Accept } from './accept';
import * as moment from 'moment';
import 'moment/locale/de';
moment.locale('de');

interface MeetChatEntry {
  id: string;
  groupRefId: string;
  subject: string;
  count: number;
  proposed_dates: string[];
}

export class MeetChat extends Chat {
  private acceptances: Accept[] = [];
  private proposedDates: moment.Moment[];
  private entry: MeetChatEntry;
  constructor(entry: MeetChatEntry) {
    super(
      {
        id: entry.id,
        groupRefId: entry.groupRefId,
        subject: entry.subject,
        count: entry.count
      });
    this.proposedDates = entry.proposed_dates.map(d => moment(d));
  }

  getProposedDatesFormatted (): string[] {
    return this.proposedDates.map( d => {
      return d.calendar(); } );
  }
  hasDates (): boolean {
    return true;
  }
  isUpcomingDate (m: moment.Moment): boolean {
    const now = moment();
    return (m.isAfter(now) && m.diff(now, 'days') < 8) ;
  }

}
