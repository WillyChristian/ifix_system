import { connectToDatabase } from "../../../util/mongodb";

const readEmployee = async (req, res) => {
	if (req.method === "GET") {
		const { db } = await connectToDatabase();
		// const attendant = await db.collection("funcionarios").find().toArray();
		const tecnician = await db
			.collection("employees")
			.find({ category: "Técnico" })
			.toArray();
		const attendant = await db
			.collection("employees")
			.find({ category: "Atendente" })
			.toArray();

		if (tecnician.length === 0 || attendant.length === 0) {
			res.status(500).json({ message: "Erro ao carregar os dados" });
			return;
		} else {
			const employee = [attendant[0], tecnician[0]];
			res.status(200).send(employee);
		}
	} else {
		res.send("nó é a mamãe");
	}
};

export default readEmployee;
