import { connectToDatabase } from "../../../util/mongodb";

const Consulta = async (req, res) => {
	if (req.method === "GET") {
		//recebe os dados do front
		// const { full_name, cpf, phone } = req.query;
		const cpf = req.query.cpf;
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

		if (cpf) {
			const { db } = await connectToDatabase();
			const response = await db
				.collection("clientes")
				.find({ cpf })
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

		// if (phone) {
		// 	const { db } = await connectToDatabase();
		// 	const response = await db
		// 		.collection("clientes")
		// 		.find({ phone })
		// 		.toArray();
		// 	if (response.length === 0) {
		// 		res.status(400).json({
		// 			message: "Não foi encontrado usuário com este Telefone",
		// 		});
		// 		return;
		// 	} else {
		// 		res.status(200).json(response);
		// 		return;
		// 	}
		// }

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
