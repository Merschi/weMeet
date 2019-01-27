import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'wm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  login() {
    if (!this._loginForm.valid) {
      console.log('invalid form!');
      return;
    } else {
      this._userService.login(this._loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/userhome']);
          },
          error => { }
        );
    }
    console.log(JSON.stringify(this._loginForm.value));
  }

  constructor(private _userService: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

      $('.ui.form')
        .form({
          fields: {
            email: {
              identifier  : 'email',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter your e-mail'
                },
                {
                  type   : 'email',
                  prompt : 'Please enter a valid e-mail'
                }
              ]
            },
            password: {
              identifier  : 'password',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter your password'
                },
                {
                  type   : 'length[6]',
                  prompt : 'Your password must be at least 6 characters'
                }
              ]
            }
          }
        })
      ;
    }

    gotoRegister() {
      this._router.navigate(['/register']);
    }

    isValid(controlName) {
      return this._loginForm.get(controlName).invalid && this._loginForm.get(controlName).touched;
    }
}
