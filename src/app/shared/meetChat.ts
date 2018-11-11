import { Chat } from './chat';
import { Accept } from './accept';
import * as moment from 'moment';
import 'moment/locale/de';
moment.locale('de');

export class MeetChat extends Chat {
  private acceptances: Accept[] = [];
  private proposed: {
      at: string,
      upComing: boolean
    }[];
 private proposedDates: moment.Moment[];
  constructor(
    id: string,
    groupRefId: string,
    subject: string,
    count: number,
    proposed_dates: string[]
  ) {
    super(id, groupRefId, subject, count);
    this.proposedDates = proposed_dates.map(d => moment(d));
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
