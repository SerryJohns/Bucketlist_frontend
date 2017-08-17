import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Bucketlist } from "../../bucketlist/bucketlist";

import { ModalModule } from 'ng2-Modal';
import { Item } from "../item";
import { toItem } from "../item.utils";
import { CreateItemService } from "../../services/items/create-item.service";
import { closeModal } from "../../services/modal";

@Component({
  selector: 'create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css'],
  providers: [CreateItemService]
})
export class CreateItemComponent implements OnInit {

  constructor(private createItemService: CreateItemService) { }

  private model: any = { };
  private errMsg: string;
  private item: Item;
  
  @Input() bucketlist: Bucketlist;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  ngOnInit() {
  }

  private submitItem(): void {
    this.item = toItem(this.model);
    let response: any = this.createItemService.createBucketlistItem(this.bucketlist.id, this.item);
    response.subscribe(
      result => {
        closeModal(this.closeBtn);
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
