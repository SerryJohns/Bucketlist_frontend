import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Bucketlist } from "../bucketlist";

@Component({
  selector: 'edit-bucketlist',
  templateUrl: './edit-bucketlist.component.html',
  styleUrls: ['./edit-bucketlist.component.css']
})
export class EditBucketlistComponent implements OnInit {

  constructor() { }

  private model: any = { };
  private errMsg: string;
  @ViewChild('closeEdit') closeEdit: ElementRef;

  @Input() bucketlist: Bucketlist;

  ngOnInit() {
    this.model = this.bucketlist;
  }

}
