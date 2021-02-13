import React, { useState } from "react";
import Menu from "../components/menu";
import { Button, makeStyles, TextField } from "@material-ui/core";

const style = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		height: "100vh",
		width: "100",
		justifyContent: "center",
		alignItems: "center",
	},
	divForm: {
		width: theme.spacing(100),
		display: "flex",
		flexWrap: "wrap",
		"& div": {
			margin: "5px",
			display: "flex",
			justifyContent: "center",
			alignItems: "space-around",
		},
	},
	textField: {
		marginLeft: "2px",
		marginRight: "2px",
		width: "25ch",
	},
}));

export default function Cliente() {
	const [client, setClient] = useState({
		full_name: "",
		cpf: "",
		phone: "",
		cep: "",
		street: "",
		neighbour: "",
		city: "",
	});
	const clientStyles = style();

	//Atualiza o estado a cada informação digitada
	const updateState = (event) => {
		const value = event.target.value;
		const key = event.target.id;

		setClient((old) => ({
			...old,
			[key]: value,
		}));
	};

	//Envia dados para o banco
	const sendToDB = async () => {
		const response = await fetch("/api/clients/create", {
			method: "POST",
			body: JSON.stringify(client),
		});
		if (response.status === 200) {
			alert("Cadastro Realizado!");
		} else {
			alert("Verifique os dados e tente novamente");
		}
	};

	return (
		<>
			<Menu />
			<div classes={{ root: clientStyles.container }}>
				<h1>Bem vindo à pagina de Clientes</h1>
				<div className={clientStyles.divForm}>
					<div>
						<TextField
							id='full_name'
							label='Nome Completo'
							type='text'
							variant='outlined'
							fullWidth
							required
							onChange={updateState}
						/>
						<TextField
							id='cpf'
							label='CPF'
							type='text'
							variant='outlined'
							required
							onChange={updateState}
						/>
						<TextField
							id='phone'
							label='Celular'
							type='text'
							variant='outlined'
							required
							onChange={updateState}
						/>
					</div>
					<div>
						<TextField
							id='cep'
							label='CEP'
							type='number'
							variant='outlined'
							required
							onChange={updateState}
						/>
						<TextField
							id='street'
							label='Rua'
							variant='outlined'
							required
							onChange={updateState}
						/>
						<TextField
							id='neighbour'
							label='Bairro'
							variant='outlined'
							required
							onChange={updateState}
						/>
						<TextField
							id='city'
							label='Cidade'
							variant='outlined'
							onChange={updateState}
						/>
					</div>
				</div>
				<div>
					<Button
						variant='outlined'
						color='secondary'
						onClick={() => sendToDB()}
					>
						Enviar
					</Button>
				</div>
			</div>
		</>
	);
}
