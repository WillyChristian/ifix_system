import { connectToDatabase } from "../../../../util/mongodb";

export default async (req, res) => {
  if (req.method === "GET") {
    const { db } = await connectToDatabase();
    const actSoNumb = await db.collection("so_settings").find().toArray();
    const newSoNumb = { newOS: actSoNumb[0].counter + 1 };
    res.status(200).json(newSoNumb);
  } else {
    res.send("Deu ruim");
  }
};
