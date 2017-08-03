import { Component, OnInit } from '@angular/core';
import { Bucketlist } from './bucketlist';

import { AuthService } from './../services/auth/auth.service';
import { BucketlistService } from './../services/bucketlist/bucketlist.service';
import { toBucketlist } from "../services/bucketlist/bucketlist_utils";

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private bucketlistService: BucketlistService
    ) { }

  private bucketlists: Bucketlist[] = [];
  private msg;

  ngOnInit() {
    this.getBucketLists();
    console.log(this.bucketlists);
  }

  private getBucketLists(): void {
    this.bucketlistService.getBucketlist()
    .subscribe(
      result => {
        let bucketlists = result.data;
        let pagination = result.pagination;
        
        if (!bucketlists) {
          this.msg = "No Bucketlists created!"
        }

        bucketlists.forEach(bucketlist => {
          let bucketlistObj = toBucketlist(bucketlist);
          this.bucketlists.push(toBucketlist(bucketlist));
        });
      },
      error => {
        console.log('error');
      }
    );
  }

}
