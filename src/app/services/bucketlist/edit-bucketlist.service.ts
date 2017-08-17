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
export class EditBucketlistService {
  private headers = HEADERS;
  
  constructor(private http: Http) { }

  editBucketlist(body: Bucketlist) {
    let url: string = baseUrl + '/bucketlists/' + body.id;
    let bodyString: string = JSON.stringify(body);
    this.headers.set("Authorization", TOKEN);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.put(url, bodyString, options)
      .map((response: Response) => response)
      .catch(handleError);
  }
}
