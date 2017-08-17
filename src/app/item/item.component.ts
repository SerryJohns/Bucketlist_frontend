import { Component, OnInit, Input } from '@angular/core';
import { Bucketlist } from "../bucketlist/bucketlist";
import { DeleteItemService } from "../services/items/delete-item.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ DeleteItemService ]
})
export class ItemComponent implements OnInit {

  constructor(private deleteItemService: DeleteItemService) { }
  @Input() bucketlist: Bucketlist;
  noItems: boolean = true;
  private errMsg: string;

  ngOnInit() {
  }

  private deleteItem(itemID: number): void {
    let response: any = this.deleteItemService.deleteItem(this.bucketlist.id, itemID);
    response.subscribe(
      response => {
        console.log(response);
      },
      err => {
        this.errMsg = "Server Error!";
      }
    );

  }
}
