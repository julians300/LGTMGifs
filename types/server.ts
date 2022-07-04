import { FieldSet } from "airtable";

export interface Thumbnail {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
}

export interface Fields extends FieldSet {
  Name: string;
  URL: string;
  Category: string;
  Height: number;
  Width: number;
  Tags: string[];
  Thumbnail: Thumbnail[];
  isApproved?: boolean;
  createdAt: string;
  Slug: string;
}
