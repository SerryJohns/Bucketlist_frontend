import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Bucketlist } from "../../bucketlist/bucketlist";

import { ModalModule } from 'ng2-Modal';
import { Item } from "../item";
import { toItem } from "../item.utils";

@Component({
  selector: 'create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor() { }

  private model: any = { };
  private errMsg: string;
  private item: Item;
  
  @Input() bucketlist: Bucketlist;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  ngOnInit() {
  }

  private submitItem(): void {
    this.item = toItem(this.model);

  }
}
