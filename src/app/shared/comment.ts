import * as moment from 'moment';
import 'moment/locale/de';
moment.locale('de');

export class Comment {
  private next: Comment;
  public at: moment.Moment;

  constructor(
    public memberRefId: string,
    public chatRefId: string,
    ats: string,
    public text: string
  ) {
      this.at = moment(ats);
   }
   getAt(): string {
     if (moment().diff(this.at, 'days') > 1) {
        return this.at.format('L LT');
     } else {
       return this.at.calendar();
     }
   }
}

