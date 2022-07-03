import type { NextApiRequest, NextApiResponse } from "next";
import { GIFS_PER_PAGE } from "../../../constants/constants";
import { Gif } from "../../../types/Gif";
import { cleanRecordData } from "../../../utils/cleanRecordData";
import table from "../../../utils/getAirtableBase";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  const pageOffset = req.query.page as string;
  let i = 1;
  let pageRecords: Gif[] = [];
  table
    .select({
      pageSize: GIFS_PER_PAGE,
      filterByFormula: "isApproved", // only return records where isApproved is checked
      sort: [{ field: "createdAt", direction: "desc" }],
    })
    .eachPage(
      (records, fetchNextPage) => {
        if (i === Number(pageOffset)) {
          console.log(records);
          pageRecords = records.map((record) => cleanRecordData(record));
        }
        i++;
        fetchNextPage();
      },
      (err) => {
        if (err) {
          console.error(err);
          res.status(400).json({});
          return;
        }
        res.status(200).json(pageRecords);
      }
    );
};
