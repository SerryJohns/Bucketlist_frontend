import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
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

  constructor(private http: Http) { }

  login(body: Object): Observable<User> {
    let bodyString = JSON.stringify(body);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.url, body, options)
      .map((response: Response) => response.json())
      .catch(handleError);
  }
  
}
