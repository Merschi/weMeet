import { Component } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/de';

moment.locale('de');

@Component({
  selector: 'wm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weMeet';
  now: string;

  constructor () {
    this.updateNow(this);
    setInterval(this.updateNow, 500, this);
  }
  updateNow (that) {
    that.now = moment().format('LLLL:ss');
  }
}
