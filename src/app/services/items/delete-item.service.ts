import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { baseUrl } from "../../../environments/base-url";
import { HEADERS, TOKEN } from "../headers";
import { handleError } from "../auth/get-users.service";

@Injectable()
export class DeleteItemService {
  private headers = HEADERS;

  constructor(private http: Http) { }

  deleteItem(bucketlistID: number, itemID: number) {
    let url: string = baseUrl + '/bucketlists/' + bucketlistID + '/items/' + itemID;
    this.headers.set("Authorization", TOKEN);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.delete(url, options)
      .map((response: Response) => response)
      .catch(handleError);
  }

}
