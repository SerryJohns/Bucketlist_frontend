import { Bucketlist } from "../../bucketlist/bucketlist";

export function toBucketlist(result: any): Bucketlist {
    return <Bucketlist>({
      id: result.id,
      name: result.name,
      description: result.description,
      interests: result.interests,
      date_created: <Date>result.date_created,
      date_modified: <Date>result.date_modified
    });
}
