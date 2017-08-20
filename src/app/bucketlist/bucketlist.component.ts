import { Component, OnInit } from '@angular/core';
import { Bucketlist } from './bucketlist';

import { AuthService } from './../services/auth/auth.service';
import { BucketlistService } from './../services/bucketlist/bucketlist.service';
import { toBucketlist } from "../services/bucketlist/bucketlist_utils";
import { Router } from "@angular/router";
import { DeleteBucketlistService } from "../services/bucketlist/delete-bucketlist.service";
import { MdDialog, MdDialogRef } from "@angular/material";
import { CreateBucketlistComponent } from "./create-bucketlist/create-bucketlist.component";

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css'],
  providers: [ DeleteBucketlistService ]
})
export class BucketlistComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private bucketlistService: BucketlistService,
    private deleteBucketlistService: DeleteBucketlistService,
    private router: Router,
    private dialog: MdDialog
    ) { }
  
  dialogRef: MdDialogRef<CreateBucketlistComponent>;
  private bucketlists: Bucketlist[] = [];
  private msg;
  selectedBucketlist: Bucketlist;
  noItems = true;

  ngOnInit() {
    this.getBucketLists();
  }

  private getBucketLists(): void {
    this.bucketlistService.getBucketlist()
    .subscribe(
      result => {
        let bucketlists = result.data;
        let pagination = result.pagination;
        
        if (!bucketlists) {
          this.msg = "No Bucketlists created!";
        }

        bucketlists.forEach(bucketlist => {
          let bucketlistObj = toBucketlist(bucketlist);
          this.bucketlists.push(toBucketlist(bucketlist));
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  private bucketlistClick(bucketlist: Bucketlist): void {
    this.selectedBucketlist = bucketlist;
  }

  private editBucketlist(bucketlist: Bucketlist): void {
    this.dialogRef = this.dialog.open(CreateBucketlistComponent, {
            width: '600px',
            data: bucketlist
    });
    this.dialogRef.afterClosed().subscribe(result => {
        console.log(result);
    });
  }

  private deleteBucketlist(id: any): void {
    let response = this.deleteBucketlistService.deleteBucketlist(id.toString());
    response.subscribe(
      result => {
        console.log(result);
        this.getBucketLists();
      },
      err => {
        console.log(err);
      }
    );
  }
}
