import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { baseUrl } from '../../../environments/base-url';
import { User } from './../../account/user';
import { toUser, handleError } from './get-users.service';


@Injectable()
export class RegisterService {
  private url = baseUrl + '/auth/register'
  private headers = new Headers({
    "Content-Type": "application/json"
  });

  constructor(
    private http: Http, 
    private router: Router
    ) { }

  register(body: User) {
    let bodyString = JSON.stringify(body);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.url, body, options)
      .map((response: Response) => {
        let result = response.json();
        let user: User = result.data ? toUser(result.data) : null;
        let token: string = result.auth_token;
        if (user && token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('id_token', JSON.stringify(result.auth_token));
          this.router.navigate(['bucketlist']);
        } else {
          return { errMsg: "Sorry! Some error occurred!" }
        }
        
      })
      .catch(handleError);
  }

}
