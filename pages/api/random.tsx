import type { NextApiRequest, NextApiResponse } from "next";
import table from "../../utils/getAirtableBase";
import { cleanRecordData } from "../../utils/cleanRecordData";

export default async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  const allGifs = await table.select({ filterByFormula: "isApproved" }).all();
  const randomGif = cleanRecordData(allGifs[Math.floor(Math.random() * allGifs.length)]);
  res.writeHead(302, {
    Location: randomGif.thumbnail.url,
  });
  res.end();
};
