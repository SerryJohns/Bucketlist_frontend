import { Item } from "../item/item";

export class Bucketlist {
    id: number;
    name: string;
    description: string;
    interests: string;
    items: Array<Item>;
    date_created: Date;
    date_modified: Date;
};
