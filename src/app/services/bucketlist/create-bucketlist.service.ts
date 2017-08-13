import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { baseUrl } from './../../../environments/base-url';
import { handleError } from '../auth/get-users.service';
import { HEADERS, TOKEN } from "../headers";
import { Bucketlist } from "../../bucketlist/bucketlist";

@Injectable()
export class CreateBucketlistService {
  private url = baseUrl + '/bucketlists/'
  private headers = HEADERS;

  constructor(private http: Http) { }

  createBucketlist(body: Bucketlist) {
    let bodyString = JSON.stringify(body);
    this.headers.set("Authorization", TOKEN);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.url, body, options)
      .map((response: Response) => response)
      .catch(handleError);
  }
}
