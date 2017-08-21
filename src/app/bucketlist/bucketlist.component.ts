import { Component, OnInit } from '@angular/core';
import { Bucketlist } from './bucketlist';

import { AuthService } from './../services/auth/auth.service';
import { BucketlistService } from './../services/bucketlist/bucketlist.service';
import { toBucketlist } from "../services/bucketlist/bucketlist_utils";
import { Router } from "@angular/router";
import { DeleteBucketlistService } from "../services/bucketlist/delete-bucketlist.service";
import { MdDialog, MdDialogRef } from "@angular/material";
import { CreateBucketlistComponent } from "./create-bucketlist/create-bucketlist.component";
import { CreateItemComponent } from "../item/create-item/create-item.component";

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
  
  private bucketlists: Bucketlist[] = [];
  private msg;
  selectedBucketlist: Bucketlist;
  bucketlistItems: any[];
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
    this.bucketlistItems = bucketlist.items ? bucketlist.items: null;
    this.selectedBucketlist = bucketlist;
  }

  private addItems(bucketlistID: number): void {
    let dialogRef: MdDialogRef<CreateItemComponent>;
    dialogRef = this.dialog.open(CreateItemComponent, {
            width: '600px',
            data: {
              bucketlistID: bucketlistID,
              item: null
            }
    });
    dialogRef.afterClosed().subscribe(result => {
        this.msg = result;
    });
  }

  private editBucketlist(bucketlist: Bucketlist): void {
    let dialogRef: MdDialogRef<CreateBucketlistComponent>;
    dialogRef = this.dialog.open(CreateBucketlistComponent, {
            width: '600px',
            data: bucketlist
    });
    dialogRef.afterClosed().subscribe(result => {
       this.msg = result;
    });
  }

  private deleteBucketlist(id: number): void {
    let response = this.deleteBucketlistService.deleteBucketlist(id);
    response.subscribe(
      result => {
        this.msg = "Bucketlist deleted successfully.";
      },
      err => {
        console.log(err);
      }
    );
  }
}
