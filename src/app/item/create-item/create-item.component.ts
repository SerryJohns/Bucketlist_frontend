import { Component, OnInit, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { Bucketlist } from "../../bucketlist/bucketlist";

import { ModalModule } from 'ng2-Modal';
import { Item } from "../item";
import { toItem } from "../item.utils";
import { CreateItemService } from "../../services/items/create-item.service";
import { closeModal } from "../../services/modal";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css'],
  providers: [CreateItemService]
})
export class CreateItemComponent implements OnInit {

  constructor(
    private createItemService: CreateItemService,
    private dialogRef: MdDialogRef<CreateItemComponent>, @Inject(MD_DIALOG_DATA) private data: any
    ) { }
  
  private title: string = "Create bucketlist item";
  private model: any = { };
  private errMsg: string;
  private item: Item;

  ngOnInit() {
    if (this.data.item) {
      this.title = "Edit bucketlist item";
      this.model = this.data.item;
    }
  }

  private submitItem(): void {
    this.item = toItem(this.model);
    let response: any = this.createItemService.createBucketlistItem(this.data.bucketlistID, this.item);
    response.subscribe(
      result => {
        this.dialogRef.close("Item created successfully!");
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
    this.dialogRef.close();
  }
}
