import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { baseUrl } from './../../../environments/base-url';
import { HEADERS, TOKEN } from './../headers';
import { handleError } from './../auth/get-users.service';
import { Bucketlist } from './../../bucketlist/bucketlist';

@Injectable()
export class BucketlistService {
  private url = baseUrl + '/bucketlists/';
  private headers = HEADERS;

  constructor(private http: Http) { }

  getBucketlist(): Observable<any> {
    this.headers.set("Authorization", TOKEN)
    let options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.url, options)
      .map(response => response.json())
      .catch(handleError);
  }

}
