import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Bucketlist } from "../bucketlist";
import { toBucketlist } from "../../services/bucketlist/bucketlist_utils";
import { CreateBucketlistService } from "../../services/bucketlist/create-bucketlist.service";
import { Router } from "@angular/router";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'create-bucketlist',
  templateUrl: './create-bucketlist.component.html',
  styleUrls: ['./create-bucketlist.component.css'],
  providers: [ CreateBucketlistService ]
})
export class CreateBucketlistComponent implements OnInit {

  constructor(
    private createBucketlistService: CreateBucketlistService,
    private router: Router,
    public thisDialogRef: MdDialogRef<CreateBucketlistComponent>, @Inject(MD_DIALOG_DATA) public data: string
    ) { }
  
  private model: any = { };
  private errMsg: string;
  private msg: string;
  private bucketlist: Bucketlist;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  
  ngOnInit() {
    console.log(this.data)
  }

  // private submitBucketlist(): void {
  //   this.bucketlist = toBucketlist(this.model);
  //   let response: any = this.createBucketlistService.createBucketlist(this.model);
  //   response.subscribe(
  //     result => {
  //       this.msg = result.message;
  //       closeModal(this.closeBtn);
  //     },
  //     err => {
  //       if (err.status === 400) {
  //         this.errMsg = "Missing required parameters.";
  //       } else {
  //         this.errMsg = "Server Error!";
  //       }
  //     }
  //   );
  // }

  private closeDialog() {
    this.thisDialogRef.close("Closed1!");
  }

  private cancelDialog() {
    this.thisDialogRef.close("Cancled");
  }

}
