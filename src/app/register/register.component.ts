import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
declare var $: any;

@Component({
  selector: 'wm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  _registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    cpass: new FormControl(null, Validators.required)
  });

  constructor(private _router: Router, private _userService: UserService) { }

  gotoLogin() {
    this._router.navigate(['/login']);
  }

  register() {
    if ( !this._registerForm.valid || this._registerForm.controls.password.value !== this._registerForm.controls.cpass.value ) {
      console.log('invalid form!');
      return;
    }
    this._userService.register(JSON.stringify(this._registerForm.value))
    .subscribe(
      data => {
        console.log(data);
        this._router.navigate(['/login']);
      },
      error => console.log(error)
    );
    console.log(JSON.stringify(this._registerForm.value));
  }

  ngOnInit() {

    $('.ui.form').form({
      fields: {
      givenName: {
        identifier: 'GivenName',
        rules: [{
          type: 'empty',
          prompt: 'Please enter your given name'
        }]
      },
      surname: {
        identifier: 'Surname',
        rules: [{
          type: 'empty',
          prompt: 'Please enter your surname'
        }]
      },
      username: {
        identifier: 'Username',
        rules: [{
          type: 'empty',
          prompt: 'Please enter a username'
        }]
      },
      email: {
        identifier: 'Email',
        rules: [{
          type: 'empty',
          prompt: 'Please enter your email'
        }, {
          type: 'email',
          prompt: 'Please enter a valid email'
        }]
      },
      password: {
        identifier: 'Password',
        rules: [{
          type: 'empty',
          prompt: 'Please enter a password'
        }, {
          type: 'length[6]',
          prompt: 'Password needs to be atleast 6 characters long'
        }]
      },
      passwordConfirm: {
        identifier: 'PasswordConfirm',
        rules: [{
          type: 'match[Password]',
          prompt: 'Password don\'t match'
        }]
      }
    }
  },
    {
        on: 'blur',
        inline: 'true'
      });
  }
}
