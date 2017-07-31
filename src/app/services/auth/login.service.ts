import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';
import { User } from './../../account/user';

@Injectable()
export class LoginService {
  private baseUrl = environment.defaults.url_prefix;
  private url = this.baseUrl + '/auth/users/';
  private res: Response;
  constructor(private http: Http) { }
  
  getUsers(): Observable<User[]> {
    return this.http.get(this.url, this.getHeaders)
      .map(extractData)
      .catch(this.handleError);
  }

  private getHeaders() {
    return new Headers({ 
      "Content-Type": "application/json" 
    });
  }

  private handleError(error: any) {
    let errMsg = (error.message) ?
                  error.message :
                  error.status ?
                  `${error.status} - ${error.statusText}` :
                  'Server error';
    console.log('err ' + errMsg);
    return Observable.throw(errMsg);
  }
}

function extractData(response: Response): User[] {
  return response.json().data.map(toUser);
}

function toUser(result: any): User {
  let user = <User>({
    id: result.id,
    firstname: result.firstname,
    surname: result.surname,
    email: result.email,
    username: result.username
  });
  return user;
}
