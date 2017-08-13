import { Component, OnInit } from '@angular/core';
import { ModalModule } from 'ng2-Modal';
import { Bucketlist } from "../bucketlist";
import { toBucketlist } from "../../services/bucketlist/bucketlist_utils";

@Component({
  selector: 'create-bucketlist',
  templateUrl: './create-bucketlist.component.html',
  styleUrls: ['./create-bucketlist.component.css']
})
export class CreateBucketlistComponent implements OnInit {

  constructor() { }
  
  private model: any = { };
  private errMsg: string;
  private bucketlist: Bucketlist;
  
  ngOnInit() {
  }

  private submitBucketlist(): void {
  }

}
