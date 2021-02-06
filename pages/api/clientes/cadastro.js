import { connectToDatabase } from "../../../util/mongodb";

const Clients = async (req, res) => {
	if (req.method === "POST") {
		const { full_name, cpf, phone, cep, street, neighbour, city } = req.body;
		if (!full_name || !cpf || !phone) {
			res.status(400).json({ message: "Há campos requeridos em branco" });
			return;
		}
		const { db } = await connectToDatabase();
		const response = await db.collection("clientes").insertOne({
			full_name,
			cpf,
			phone,
			cep: cep || "",
			street: street || "",
			neighbour: neighbour || "",
			city: city || "",
		});

		res.status(200).send(response.ops);
	} else {
		res.status(500).send({ Erro: "Parâmetro de cadastro deve ser POST" });
	}
};
export default Clients;
