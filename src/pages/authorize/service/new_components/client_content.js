import React from "react";
import { TextField, Typography, makeStyles } from "@material-ui/core";

const styles = makeStyles({
	divisor: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "center",
		"& .MuiTextField-root": {
			margin: "1rem",
			width: "50%",
		},
	},
});

/* Pesquisa cliente por CPF */
const searchById = async () => {
	const _id = document.querySelector("#cpf").value;
	axios
		.get(`../api/clients/${_id}`)
		.then((response) => {
			const data = response.data[0];
			setClient({ ...data });
		})
		.catch((err) => console.log(err));
};

export default function ClientContent({ ...props }) {
	const { handleChange, values } = props;
	const formStyles = styles();
	return (
		<div>
			<legend>
				<Typography variant={"h5"}>Dados do cliente</Typography>
			</legend>
			<div className={formStyles.divisor}>
				<TextField
					type='text'
					placeholder='Nome'
					name='name'
					value={values.name}
					onChange={handleChange}
				/>
				<TextField type='text' placeholder='CPF' name='cpf' />
				<TextField type='text' placeholder='E-mail' name='email' />
			</div>
			<div className={formStyles.divisor}>
				<TextField
					name='phone_home'
					type='text'
					placeholder='Telefone Residencial'
					value={values.phone_home}
					onChange={handleChange}
				/>
				<TextField type='text' placeholder='Celular' />
				<TextField
					name='cellphone'
					type='text'
					placeholder='Telefone Residencial'
					value={values.cellphone}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
}
