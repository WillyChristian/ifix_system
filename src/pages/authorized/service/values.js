import * as Yup from "yup";
const values = {
	id: "",
	client: {
		client_id: "",
		full_name: "",
		phone: "",
	},
	attendant: {
		att_id: "",
		full_name: "",
		store: "",
	},
	tecnician: {
		tec_id: "",
		full_name: "",
		store: "",
	},
	device: {
		brand: "",
		model: "",
		color: "",
	},
	in: {
		date: "",
		description: "",
		type_in: "",
	},
	out: {
		date: "",
		status: "",
		description: "",
	},
	removal: {
		date: "",
		price: "",
		discount: "",
		times: "",
		taxes: "",
		final_price: "",
	},
};

const validation = Yup.object().shape({
	nome: Yup.string()
		.min(2, "User name deve ser um email valido")
		.email("Email inválido")
		.required("Campo Obrigatório"),
	pass: Yup.string().required("Campo Obrigatório"),
});
export { values, validation };
