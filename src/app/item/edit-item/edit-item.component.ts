import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Item } from "../item";
import { EditItemService } from "../../services/items/edit-item.service";
import { toItem } from "../item.utils";
import { closeModal } from "../../services/modal";

@Component({
  selector: 'edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
  providers: [ EditItemService ]
})
export class EditItemComponent implements OnInit {

  constructor(private editItemService: EditItemService) { }

  @Input() item: Item;
  @Input() bucketlistID: number;
  @ViewChild('closeItemEdit') closeBtn: ElementRef;
  private model: any = { };
  private errMsg: string;
  
  ngOnInit() {
    this.model = this.item;
  }
  
  private updateItem(): void {
    let response: any = this.editItemService.editItem(this.bucketlistID, this.item.id, toItem(this.model));
    response.subscribe(
      result => {
        console.log(result);
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
