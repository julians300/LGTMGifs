import type { NextApiRequest, NextApiResponse } from "next";
import table from "../../utils/getAirtableBase";

const total = async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  const totalCount = (await table.select({ filterByFormula: "isApproved" }).all()).length;
  res.status(200).json(totalCount);
};

export default total;
