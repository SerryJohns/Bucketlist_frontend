import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Bucketlist } from "../../bucketlist/bucketlist";
import { baseUrl } from "../../../environments/base-url";
import { HEADERS, TOKEN } from "../headers";
import { handleError } from "../auth/get-users.service";

@Injectable()
export class DeleteBucketlistService {
  private headers = HEADERS;

  constructor(private http: Http) { }

  deleteBucketlist(id: string) {
    let url: string = baseUrl + '/bucketlists/' + id;
    this.headers.set("Authorization", TOKEN);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.delete(url, options)
      .map((response: Response) => response)
      .catch(handleError);
  }

}
