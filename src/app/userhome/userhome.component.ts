import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'wm-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  username = '';
  constructor(private _userService: UserService,
  private _router: Router) {
    this._userService.getUserName()
    .subscribe(
      data => this.username = data.toString(),
      error => this._router.navigate(['/login'])
    );
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
