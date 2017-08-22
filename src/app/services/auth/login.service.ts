import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { baseUrl } from '../../../environments/base-url';
import { User } from './../../account/user';
import { toUser, handleError } from './get-users.service';

@Injectable()
export class LoginService {
  private url = baseUrl + '/auth/login'
  private headers = new Headers({
    "Content-Type": "application/json"
  });
  user: User;

  constructor(private http: Http, private router: Router) { }

  login(body: Object) {
    let bodyString = JSON.stringify(body);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.url, body, options)
      .map((response: Response) => {
        let result = response.json();
        this.user = result.data? toUser(result.data): null;
        if (this.user){
          localStorage.setItem(
          'currentUser', JSON.stringify(this.user)
          );
          localStorage.setItem(
            'id_token', JSON.stringify(result.auth_token)
          );
        } else {
          return { errMsg: "Sorry! Some error occurred!" };
        }
      })
      .catch(handleError);
  }
  
}
