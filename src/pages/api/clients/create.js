import { connectToDatabase } from "../../../util/mongodb";

const Clients = async (req, res) => {
	if (req.method === "POST") {
		const client = JSON.parse(req.body);

		const { full_name, cpf, phone, cep, street, neighbour, city } = {
			...client,
		};
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

		res.status(200).send(JSON.stringify(response.ops));
	} else {
		res.status(500).send({ message: "Parâmetro de cadastro deve ser POST" });
	}
};
export default Clients;
