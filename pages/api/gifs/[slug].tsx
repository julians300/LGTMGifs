import type { NextApiRequest, NextApiResponse } from "next";
import { cleanRecordData } from "../../../utils/cleanRecordData";
import table from "../../../utils/getAirtableBase";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  const slug = req.query.slug as string;
  const unslugify = slug.replace(/-/g, " ").toLocaleLowerCase();
  const records = await table
    .select({
      filterByFormula: `SEARCH("${unslugify}", LOWER({Name}))`,
    })
    .firstPage();
  const record = records.filter((record) => (record.fields.Name as string).toLowerCase() === unslugify)[0];
  res.status(200).json(cleanRecordData(record));
};
