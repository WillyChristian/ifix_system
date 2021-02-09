import React, { useState } from "react";
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
});
const Listar = () => {
	const [list, setList] = useState({
		cpf: "",
	});

	const atualiza = (event) => {
		const value = event.target.value;
		const key = event.target.id;
		setList((old) => ({
			...old,
			[key]: value,
		}));
		console.log(list);
	};

	const listClients = async () => {
		if (!list.cpf || list.cpf === "") {
			alert("Insira um número de CPF válido!");
		} else {
			const response = await fetch("api/clients/read", {
				method: "GET",
				body: list.cpf,
			});
			if (response.status === 200) {
				alert();
			} else {
			}
		}
	};

	const listarStyle = style();
	return (
		<div className={listarStyle.container}>
			<div className={listarStyle.header}>
				<TextField
					placeholder='Informe o CPF do cliente'
					id='cpf'
					onChange={atualiza}
				/>
				<Button onClick={listClients}>Listar</Button>
			</div>
			<Grid container>
				<Grid item></Grid>
			</Grid>
		</div>
	);
};

export default Listar;
