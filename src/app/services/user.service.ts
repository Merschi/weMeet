import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private _http: HttpClient) {
   }

  register(body: any) {
    return this._http.post('https://ottelinux:3000/users/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body: any) {
    return this._http.post('https://ottelinux:3000/users/login', body, {
      observe: 'body'
    });
  }


  getUserName() {
    return this._http.get('https://ottelinux:3000/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
}
