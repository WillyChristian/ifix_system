import React, { useState } from "react";
import { useRouter } from "next/router";
import Menu from "../components/menu";
import axios from "axios";
import Error from "../components/error";
import { Button, TextField, makeStyles } from "@material-ui/core";

// Estilos
const style = makeStyles({
	container: {
		display: "flex",
		width: "100% auto",
		height: "100vh",
		justifyContent: "start",
		alignItems: "center",
		flexDirection: "column",
	},
	header: {
		display: "flex",
		flexDirection: "row",
		width: "500px auto",
		margin: "2rem",
	},
});

// COMPONENTE
const Listar = () => {
	const router = useRouter();
	const [client, setClient] = useState([]);
	const [error, setError] = useState("");

	const getClientLIst = async () => {
		const cpf = document.getElementById("cpf").value;
		const url = `../api/clients/${cpf}`;
		console.log(url);
		await axios
			.get(url)
			.then((response) => {
				setClient(response.data);
			})
			.catch((error) => {
				setError(error);
			});
	};

	const listarStyle = style();

	const abrirOS = (id) => {
		router.push({
			pathname: "../service/[id]",
			query: { id },
		});
	};
	if (error) {
		return <Error />;
	} else {
		return (
			<>
				<Menu />
				<div className={listarStyle.container}>
					<div className={listarStyle.header}>
						<TextField placeholder='Informe o CPF do cliente' id='cpf' />
						<Button onClick={getClientLIst}>Listar</Button>
					</div>
					<table>
						<tr>
							<th>ID</th>
							<th>NOME</th>
							<th>CPF</th>
							<th></th>
						</tr>
						{client?.map((event) => {
							return (
								<>
									<tr>
										<td>{event._id}</td>
										<td>{event.full_name}</td>
										<td>{event.cpf}</td>
										<td>
											<Button onClick={() => abrirOS(event._id)}>
												Abrir OS
											</Button>
										</td>
									</tr>
								</>
							);
						})}
					</table>
				</div>
			</>
		);
	}
};

export default Listar;
