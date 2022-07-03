import type { NextApiRequest, NextApiResponse } from "next";
import { GIFS_PER_PAGE } from "../../../constants/constants";
import { cleanRecordData } from "../../../utils/cleanRecordData";
import table from "../../../utils/getAirtableBase";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  const tag = req.query.tag as string;
  const unslugify = tag.replace(/-/g, " ");
  const records = await table
    .select({
      // maxRecords: GIFS_PER_PAGE,
      filterByFormula: `FIND("${unslugify}", LOWER({Tags}))`,
      sort: [{ field: "createdAt", direction: "desc" }],
    })
    .firstPage();
  const map = records.map((record) => cleanRecordData(record));
  res.status(200).json(map);
};
