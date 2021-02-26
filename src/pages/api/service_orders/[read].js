import { connectToDatabase } from "../../../../util/mongodb";

export default async (req, res) => {
	if (req.method === "GET") {
		const numOs = req.query.read;
		const { db } = await connectToDatabase();

		const resultSearch = await db
			.collection("service_order")
			.find({ soNum: numOs })
			.toArray();

		res.status(200).send(resultSearch);
	} else {
		res.status(400).end({
			message: "Bad request. Verify the method and try again",
		});
	}
};
