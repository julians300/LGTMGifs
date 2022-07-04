import type { NextApiRequest, NextApiResponse } from "next";
import { cleanRecordData } from "../../../utils/cleanRecordData";
import table from "../../../utils/getAirtableBase";

const slug = async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  const slug = req.query.slug as string;
  const records = await table
    .select({
      filterByFormula: `SEARCH("${slug}", {Slug})`,
    })
    .firstPage();
  // Filter out multiple records. Airtable returns any field that contains the slug, not an exact match.
  const record = records.filter((record) => (record.fields.Slug as string).toLowerCase() === slug)[0];
  res.status(200).json(cleanRecordData(record));
};

export default slug;
