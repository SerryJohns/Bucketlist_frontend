import { Component, OnInit, Input } from '@angular/core';
import { Item } from "../item";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor() { }

  @Input() item: Item;
  private model: any = { };
  
  ngOnInit() {
    this.model = this.item;
  }
  
  private updateItem(): void {

  }
}
