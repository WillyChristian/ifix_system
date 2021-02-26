import { connectToDatabase } from "../../../../util/mongodb";

/* 
    Por hora busca apenas os itens listados como sendo do tipo 'Manutenção'

    em breve será tratada para receber parâmetros diferentes de busca

*/
const readProducts = async (req, res) => {
	if (req.method === "GET") {
		const { db } = await connectToDatabase();
		// const attendant = await db.collection("funcionarios").find().toArray();
		const products = await db
			.collection("produtos")
			.find({ type: "Manutenção" })
			.toArray();

		if (products.length === 0) {
			res.status(500).json({ message: "Erro ao carregar os dados" });
		} else {
			res.status(200).send(products);
		}
	} else {
		res.send("Erro. Verificar o parâmetro de busca.");
	}
};
export default readProducts;
