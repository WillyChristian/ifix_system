import { connectToDatabase } from "../../../util/mongodb";
import { ObjectID } from "mongodb";

const Consulta = async (req, res) => {
	if (req.method === "GET") {
		//recebe os dados do front
		// const { full_name, cpf, phone } = req.query;

		const size = req.query.search.length;
		const params = req.query.search;

		// if (full_name) {
		// 	const { db } = await connectToDatabase();
		// 	const response = await db
		// 		.collection("clientes")
		// 		.find({ full_name })
		// 		.toArray();
		// 	if (response.length === 0) {
		// 		res.status(400).json({
		// 			message: "Não foi encontrado usuário com este nome",
		// 		});
		// 		return;
		// 	} else {
		// 		res.status(200).json(response);
		// 		return;
		// 	}
		// }
		// Busca por CPF
		if (size === 11) {
			const { db } = await connectToDatabase();
			const response = await db
				.collection("clientes")
				.find({ cpf: params })
				.toArray();
			if (response.length === 0) {
				res.status(400).json({
					message: "Não foi encontrado usuário com este CPF",
				});
				return;
			} else {
				res.status(200).json(response);
				return;
			}
		}

		if (size === 24) {
			const { db } = await connectToDatabase();
			const response = await db
				.collection("clientes")
				.find({ _id: ObjectID(params) })
				.toArray();
			if (response.length === 0) {
				res.status(400).json({
					message: "Não foi encontrado usuário com este Telefone",
				});
				return;
			} else {
				res.status(200).json(response);
				return;
			}
		}

		// if (!full_name || !cpf || !phone) {
		// 	res.status(400).json({
		// 		message: "Preencha ao menos um campo de pesquisa",
		// 	});
		// 	return;
		// }
	} else {
		res.status(500).send({ Erro: "Parâmetro de envio deve ser GET" });
	}
};
export default Consulta;
