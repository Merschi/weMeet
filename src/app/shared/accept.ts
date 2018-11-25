import * as moment from 'moment';
import 'moment/locale/de';
moment.locale('de');

export class Accept {
  private acceptances: { [key: string]: Accept.level }[];
  constructor(
    public memberRefId: string,
    public meetChatRefId: string,
  ) { }

  setAcceptance(at: moment.Moment, level: Accept.level)  {
    this.acceptances[at.format()] = level;
  }

  getAcceptances(): { [key: string]: Accept.level }[] {
    return this.acceptances;
  }

  dumpAcceptances() {
    this.acceptances.forEach(element => {
      console.log(element.key , ' => '  , element);
    });
  }

}

export namespace Accept {
  export enum level { Yes, Maybe, No }
}
