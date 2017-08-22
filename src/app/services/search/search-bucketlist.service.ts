import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { baseUrl } from './../../../environments/base-url';
import { HEADERS, TOKEN } from './../headers';
import { handleError } from './../auth/get-users.service';
import { Bucketlist } from './../../bucketlist/bucketlist';

@Injectable()
export class SearchBucketlistService {
  private headers = HEADERS;
  constructor(private http: Http) { }

  searchBucketlists(param: string, limit: number, offset: number) {
    let params = new URLSearchParams();
    params.set('q', param);
    params.set('limit', limit.toString());
    params.set('offset', offset.toString());

    let url: string = baseUrl + '/bucketlists/';
    this.headers.set("Authorization", TOKEN)
    let options = new RequestOptions({ headers: this.headers, search: params });
    return this.http.get(url, options)
      .map(response => {
        response.json();
      })
      .catch(handleError);
  }
}
