import { connectToDatabase } from "../../../../util/mongodb";

export default async (req, res) => {
  if (req.method === "GET") {
    const numOs = req.query.read;
    const { db } = await connectToDatabase();

    const resultSearch = await db
      .collection("service_order")
      .find({ service: numOs })
      .toArray();
    const os = resultSearch[0];
    res.status(200).json(os);
  } else {
    res.status(400).end({
      message: "Bad request. Verify the method and try again",
    });
    res.send(JSON.stringify(numOs));
  }
};
