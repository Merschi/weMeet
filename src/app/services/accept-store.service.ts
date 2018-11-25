import { Injectable } from '@angular/core';
import { Accept } from '../shared/accept';
import * as moment from 'moment';
import 'moment/locale/de';
moment.locale('de');

@Injectable()
export class AcceptStoreService {

  private accepts: Accept[];
  constructor() {
    this.accepts = [
        new Accept(
          'Rainer',
          'c2'
        ),
        new Accept(
          'Ludger',
          'c2'
        ),
        new Accept(
          'Stephan',
          'c2'
        ),
    ];

    this.accepts[0].setAcceptance(moment('2018-11-25'), Accept.level.Yes);
    this.accepts[0].setAcceptance(moment('2018-11-24'), Accept.level.No);

    this.accepts[1].setAcceptance(moment('2018-11-25'), Accept.level.Maybe);
    this.accepts[1].setAcceptance(moment('2018-11-24'), Accept.level.Yes);

    this.accepts[2].setAcceptance(moment('2018-11-25'), Accept.level.No);
    this.accepts[2].setAcceptance(moment('2018-11-24'), Accept.level.Yes);

  }

}
