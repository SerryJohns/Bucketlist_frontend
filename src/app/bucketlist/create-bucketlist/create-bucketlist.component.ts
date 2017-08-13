import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalModule } from 'ng2-Modal';
import { Bucketlist } from "../bucketlist";
import { toBucketlist } from "../../services/bucketlist/bucketlist_utils";
import { CreateBucketlistService } from "../../services/bucketlist/create-bucketlist.service";
import { Router } from "@angular/router";
import { closeModal } from "../../services/modal";

@Component({
  selector: 'create-bucketlist',
  templateUrl: './create-bucketlist.component.html',
  styleUrls: ['./create-bucketlist.component.css'],
  providers: [ CreateBucketlistService ]
})
export class CreateBucketlistComponent implements OnInit {

  constructor(
    private createBucketlistService: CreateBucketlistService,
    private router: Router
    ) { }
  
  private model: any = { };
  private errMsg: string;
  private msg: string;
  private bucketlist: Bucketlist;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  
  ngOnInit() {
  }

  private submitBucketlist(): void {
    this.bucketlist = toBucketlist(this.model);
    let response: any = this.createBucketlistService.createBucketlist(this.model);
    response.subscribe(
      result => {
        this.msg = result.message;
        closeModal(this.closeBtn);
      },
      err => {
        if (err.status == 400) {
          this.errMsg = "Missing required parameters.";
        } else {
          "Server Error!";
        }
      }
    );
  }

}
