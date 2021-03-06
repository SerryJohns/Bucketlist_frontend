import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { baseUrl } from '../../../environments/base-url';
import { User } from './../../account/user';


export function handleError(error: any) {
  return Observable.throw (
    error.json().error || { 
          status: error.status, 
          statusText: error.statusText 
        }
  );
}

export function toUser(result: any): User {
  return <User>({
    id: result.id,
    firstname: result.firstname,
    surname: result.surname,
    email: result.email,
    username: result.username,
    password: result.password
  });
}

@Injectable()
export class GetUsersService {
  private url = baseUrl + '/auth/users/';
  private res: Response;

  constructor(private http: Http) { }
  
  getUsers(): Observable<User[]> {
    return this.http.get(this.url, this.getHeaders)
      .map(extractUserData)
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

function extractUserData(response: Response): User[] {
  return response.json().data.map(toUser);
}
