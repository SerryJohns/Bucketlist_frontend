import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Bucketlist } from "../bucketlist";
import { toBucketlist } from "../../services/bucketlist/bucketlist_utils";
import { CreateBucketlistService } from "../../services/bucketlist/create-bucketlist.service";
import { Router } from "@angular/router";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { EditBucketlistService } from "../../services/bucketlist/edit-bucketlist.service";

@Component({
  selector: 'create-bucketlist',
  templateUrl: './create-bucketlist.component.html',
  styleUrls: ['./create-bucketlist.component.css'],
  providers: [ CreateBucketlistService, EditBucketlistService ]
})
export class CreateBucketlistComponent implements OnInit {

  constructor(
    private createBucketlistService: CreateBucketlistService,
    private editBucketlistService: EditBucketlistService,
    private router: Router,
    public thisDialogRef: MdDialogRef<CreateBucketlistComponent>, @Inject(MD_DIALOG_DATA) public data: Bucketlist
    ) { }
  
  private title: string = "Create Bucketlist";
  private model: any = { };
  private errMsg: string;
  private msg: string;
  private bucketlist: Bucketlist;
  private otherInterests: string;
  
  ngOnInit() {
    if (this.data){
      this.model = this.data;
      this.title = "Edit Bucketlist";
    }
  }

  private submitBucketlist(): void {
    this.model.interests = this.otherInterests ? this.otherInterests :  this.model.interests;
    this.bucketlist = toBucketlist(this.model);
    let response: any = this.createBucketlistService.createBucketlist(this.bucketlist);
    response.subscribe(
      result => {
        this.thisDialogRef.close("Bucketlist created successfully!");
      },
      err => {
        if (err.status === 400) {
          this.errMsg = "Missing required parameters.";
        } else {
          this.errMsg = "Server Error!";
        }
      }
    );
  }

  private editBucketlist(): void {
    this.bucketlist = toBucketlist(this.model);
    let response = this.editBucketlistService.editBucketlist(this.bucketlist);
    response.subscribe(
      result => {
         this.thisDialogRef.close("Bucketlist updated successfully!");
      },
      err => {
        if (err.status === 400) {
          this.errMsg = "Missing required parameters.";
        } else {
          this.errMsg = "Server Error!";
        }
      }
    );
  }

  private cancelDialog() {
    this.thisDialogRef.close();
  }

}
