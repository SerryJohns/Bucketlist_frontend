import { Component, OnInit } from '@angular/core';
import { Bucketlist } from './bucketlist';

import { AuthService } from './../services/auth/auth.service';
import { BucketlistService } from './../services/bucketlist/bucketlist.service';
import { toBucketlist } from "../services/bucketlist/bucketlist_utils";
import { Router } from "@angular/router";
import { DeleteBucketlistService } from "../services/bucketlist/delete-bucketlist.service";
import { MdDialog, MdDialogRef, PageEvent } from "@angular/material";
import { CreateBucketlistComponent } from "./create-bucketlist/create-bucketlist.component";
import { CreateItemComponent } from "../item/create-item/create-item.component";
import { SearchBucketlistService } from "../services/search/search-bucketlist.service";

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css'],
  providers: [ DeleteBucketlistService, SearchBucketlistService ]
})
export class BucketlistComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private bucketlistService: BucketlistService,
    private deleteBucketlistService: DeleteBucketlistService,
    private searchBucketlistService: SearchBucketlistService,
    private router: Router,
    private dialog: MdDialog
    ) { }
  
  private bucketlists: Bucketlist[] = [];
  private msg;
  private param: string;
  selectedBucketlist: Bucketlist;
  bucketlistItems: any[];
  noItems = true;

  private length = 3;
  private pageSize = 3;
  private pageSizeOptions = [2, 5, 10, 25, 100];
  private pageEvent: PageEvent;
  private next: string;
  private prev: string;
  private page: number;
  private pages: string;

  ngOnInit() {
    this.getBucketLists();
  }

  private paginateBucketlists(pageEvent: PageEvent): void {
    this.pageSize = pageEvent.pageSize;
    if ((pageEvent.pageIndex > this.page) && this.next) {
      this.searchBucketlist(this.next);
    } else if (this.prev) {
      this.searchBucketlist(this.prev);
    } else {
      this.searchBucketlist();
    }
  }

  private searchBucketlist(next?: string): void {
    this.bucketlists = [];
    let response = this.searchBucketlistService.searchBucketlists(this.param, this.pageSize, 0, next);
    response.subscribe(
      result => {
        if (result.pagination) {
          this.length = result.pagination.num_results;
          this.next = result.pagination.next;
          this.prev = result.pagination.prev;
          this.page = result.pagination.page - 1;
          this.pages = result.pagination.total_pages;
          result.data.forEach(bucketlist => {
            this.bucketlists.push(toBucketlist(bucketlist));
          });
        }
        if (result.message != "Bucketlist(s) retrieved successfully.")
          this.msg = result.message;
      },
      err => {
        console.log(err);
        this.msg = err.message;
      }
    );
  }

  private getBucketLists(): void {
    this.searchBucketlist();
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
