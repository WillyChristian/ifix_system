import { connectToDatabase } from "../../../util/mongodb";

const Consulta = async (req, res) => {
	if (req.method === "GET") {
		//recebe os dados do front
		const { full_name, cpf, phone } = req.body;

		//     || !cpf || !phone){
		//  res.status(400).json({message: "Preencha ao menos um campo de pesquisa"})

		// }
		// if(full_name){
		//     const { db } = await connectToDatabase()
		//     const response =  await db.collection("clientes").find(full_name)
		//     res.status(200).send(response)
		//     return
		// }
		// if(cpf){
		//     const { db } = await connectToDatabase()
		//     const response =  await db.collection("clientes").find(cpf)
		//     res.status(200).send(response)
		//     return
		// }
		//  if(phone){
		//     const { db } = await connectToDatabase()
		//     const response =  await db.collection("clientes").find(phone)
		//     res.status(200).send(response)
		//     return
		// }
	} else {
		res.status(500).send({ Erro: "Parâmetro de envio deve ser GET" });
	}
};
export default Consulta;
