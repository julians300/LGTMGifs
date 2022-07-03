// import { Fields } from "../types/server";
import { Gif } from "../types/Gif";
import { FieldSet, Record, Thumbnail } from "airtable";

export const cleanRecordData = (record: Record<FieldSet>): Gif => {
  return {
    id: record.id,
    name: record.fields.Name as string,
    category: record.fields.Category as string,
    thumbnail: {
      url: record.fields.URL as string,
      height: (record.fields.Thumbnail as unknown as Thumbnail[])[0].height,
      width: (record.fields.Thumbnail as unknown as Thumbnail[])[0].width,
    },
    tags: record.fields.Tags as string[],
  };
};
