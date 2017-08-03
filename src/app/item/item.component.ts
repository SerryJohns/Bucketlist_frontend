import { Component, OnInit, Input } from '@angular/core';
import { Bucketlist } from "../bucketlist/bucketlist";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Input() bucketlist: Bucketlist;
  noItems: boolean = true;

  ngOnInit() {
    // if (this.bucketlist.items.length) {
    //   this.noItems = false;
    // }
  }

}
