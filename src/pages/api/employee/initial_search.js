import { connectToDatabase } from "../../../../util/mongodb";

export default async (req, res) => {
	if (req.method !== "GET") {
		res.status(400).send("Utilize o padrão GET");
	} else {
		const { db } = await connectToDatabase();
		const employees = [];
		employees.push(
			await db
				.collection("employees")
				.find({ category: "Técnico" })
				.toArray()
		);
		employees.push(
			await db
				.collection("employees")
				.find({ category: "Atendente" })
				.toArray()
		);

		if (!employees) {
			res.status(404).send({ message: "Nenhum dado encotrado" });
			return;
		}
		res.status(200).send(employees);
	}
};
