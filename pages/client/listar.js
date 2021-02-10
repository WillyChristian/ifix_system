import React, { useState } from "react";
import useSWR from "swr"; // não sei
import axios from "axios";
import { Grid, Button, TextField, makeStyles } from "@material-ui/core";

// Estilos
const style = makeStyles({
	container: {
		display: "flex",
		width: "100% auto",
		height: "100vh",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	header: {
		display: "flex",
		flexDirection: "row",
		width: "500px auto",
		alignItems: "space-btween",
	},
	gridItem1: {
		backgroundColor: "#949494",
	},
	gridItem2: {
		backgroundColor: "#9a9a9a",
	},
});

// COMPONENTE
const Listar = () => {
	const [client, setClient] = useState([]);

	const getClientLIst = async () => {
		const cpf = document.getElementById("cpf").value;
		const url = `api/clients/${cpf}`;
		await axios.get(url).then((resp) => {
			setClient(resp.data);
		});
	};

	const listarStyle = style();
	return (
		<div className={listarStyle.container}>
			<div className={listarStyle.header}>
				<TextField placeholder='Informe o CPF do cliente' id='cpf' />
				<Button onClick={getClientLIst}>Listar</Button>
			</div>
			<Grid container spacing={2} alignContent={"center"} justify={"center"}>
				{client.map((event) => {
					return (
						<>
							<Grid item classes={{ root: listarStyle.gridItem1 }}>
								<p>ID: {event._id}</p>
								<p>Nome: {event.full_name}</p>
								<p>CPF: {event.cpf}</p>
								<p>Telefone: {event.phone}</p>
								<p>CEP: {event.cep}</p>
								<p>Rua: {event.street}</p>
								<p>Bairro: {event.neighbour}</p>
								<p>Cidade: {event.city}</p>
							</Grid>
						</>
					);
				})}
			</Grid>
		</div>
	);
};

export default Listar;
