import { Fields } from "../types/server";
import { Gif } from "../types/Gif";
import Airtable from "airtable";

export const cleanRecordData = (record: Airtable.Record<Fields>): Gif => {
  return {
    id: record.id,
    name: record.fields.Name,
    category: record.fields.Category,
    thumbnail: {
      url: record.fields.URL,
      height: record.fields.Thumbnail[0].height,
      width: record.fields.Thumbnail[0].width,
    },
    tags: record.fields.Tags,
  };
};
