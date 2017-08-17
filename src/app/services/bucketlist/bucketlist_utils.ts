import { Bucketlist } from "../../bucketlist/bucketlist";
import { Item } from "../../item/item";
import { toItem } from "../../item/item.utils";

export function toBucketlist(result: any): Bucketlist {
    return <Bucketlist>({
      id: result.id,
      name: result.name,
      description: result.description,
      interests: result.interests,
      items: sendItems(result.items),
      date_created: <Date>result.date_created,
      date_modified: <Date>result.date_modified
    });
}

function sendItems(items: any): Item[] {
    let items_array: Item[] = [];
    if (items) {
        items.forEach(item => {
            items_array.push(toItem(item));
        });
    }
    return items_array;
}