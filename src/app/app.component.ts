import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { UserService } from './services/user.service';


import 'moment/locale/de';

declare var $: any;

moment.locale('de');

@Component({
  selector: 'wm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weMeet';
  now: string;
  username: string;

  constructor (
    private _userService: UserService,
    private _router: Router) {
    this.updateNow(this);
    setInterval(this.updateNow, 500, this);

    this._router.events.subscribe(
      event => {
        console.log('router event: ', event);
        this.updateUser();
      }
    );

  }

  updateUser () {
    this._userService.getUserName()
    .subscribe(
      data => this.username = data.toString(),
      error => { this.username = '';
      if (!this._router.url.endsWith('register')) {
        this._router.navigate(['/login']);
      }
    }
    );
  }

  updateNow (that) {
    that.now = moment().format('LLLL:ss');
  }
  toggleSidebar() {
    console.log('toggleSidebar...');
    $('.ui.sidebar').sidebar('toggle');
  }
}
