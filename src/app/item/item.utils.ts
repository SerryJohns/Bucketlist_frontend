import { Item } from "./item";

export function toItem(result: any): Item {
    return <Item>({
        id: result.id,
        name: result.name,
        description: result.description,
        status: result.status,
        date_accomplished: result.date_accomplished,
        date_created: result.date_created
    });
}
