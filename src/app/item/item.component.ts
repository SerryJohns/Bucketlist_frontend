import { Component, OnInit, Input } from '@angular/core';
import { Bucketlist } from "../bucketlist/bucketlist";
import { DeleteItemService } from "../services/items/delete-item.service";
import { MdDialog, MdDialogRef } from "@angular/material";
import { CreateItemComponent } from "./create-item/create-item.component";
import { Item } from "./item";
import { EditItemService } from "../services/items/edit-item.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ DeleteItemService, EditItemService ]
})
export class ItemComponent implements OnInit {

  constructor(
    private deleteItemService: DeleteItemService,
    private editItemService: EditItemService,
    private dialog: MdDialog
    ) { }

  @Input() bucketlist: Bucketlist;
  @Input() items: any[];
  private checked: boolean;
  noItems: boolean = true;
  private errMsg: string;
  private position: string = "above";
  private pending: string;
  private complete: string;
  private all: string;

  ngOnInit() {
    this.activate();
  }

  private completeItem(item: Item) {
    item.status = "complete";
    item.date_accomplished = new Date();
    let response = this.editItemService.editItem(this.bucketlist.id, item.id, item);
    response.subscribe(
      result => {
        console.log("Item Completed successfully!");
      },
      err => {
        console.log(err);
      }
    );
  }

  private editItem(item: Item): void {
    let dialogRef: MdDialogRef<CreateItemComponent> = this.dialog.open(
      CreateItemComponent, {
        width: '600px',
        data: {
          bucketlistID: this.bucketlist.id,
          item: item
        }
      }
    );
    dialogRef.afterClosed().subscribe(result => {

    });
    
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

  private filterStatus(status: string): void {
    if (!status){
      this.items = this.bucketlist.items;
      this.activate();
      return;
    }

    let filtered = this.bucketlist.items.filter(item => {
      if (item.status === status) {
        return item;
      }
    });
    this.activate(status);
    this.items = filtered;
  }

  private activate(status?: string): void {
    let active: string = "active-btn";
    let inactive: string = "inactive-btn";
    switch (status) {
      case "complete":
        this.complete = active;
        this.pending = inactive;
        this.all = inactive;
        break;
      case "pending":
        this.complete = inactive;
        this.pending = active;
        this.all = inactive;
        break;
      default:
        this.complete = inactive;
        this.pending = inactive;
        this.all = active;
        break;
    };
  }

}
