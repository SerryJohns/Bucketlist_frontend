import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Bucketlist } from "../bucketlist";
import { EditBucketlistService } from "../../services/bucketlist/edit-bucketlist.service";
import { closeModal } from "../../services/modal";

@Component({
  selector: 'edit-bucketlist',
  templateUrl: './edit-bucketlist.component.html',
  styleUrls: ['./edit-bucketlist.component.css'],
  providers: [ EditBucketlistService ]
})
export class EditBucketlistComponent implements OnInit {

  constructor(private editBucketlistService: EditBucketlistService) { }

  private model: any = { };
  private errMsg: string;
  @ViewChild('closeEdit') closeEdit: ElementRef;

  @Input() bucketlist: Bucketlist;

  ngOnInit() {
    this.model = this.bucketlist;
  }

  private updateBucketlist(): void {
    let response = this.editBucketlistService.editBucketlist(this.model);
    response.subscribe(
      result => {
        closeModal(this.closeEdit);
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

}
