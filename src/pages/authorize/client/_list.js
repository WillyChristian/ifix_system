import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, TextField, makeStyles, Typography } from "@material-ui/core";
import { useSession } from "next-auth/client";

//Component
import Menu from "../../components/menu";
import Error from "../../components/error";
import Login from "../../login/index";

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
	trow: {
		padding: "5px",
		borderTop: "1px solid",
		borderBottom: "1px solid",
	},
	tcolumn: {
		padding: "5px",
		borderTop: "1px solid",
	},
});

const Listar = () => {
	const [session] = useSession();

	if (!session) return <Login />;
	if (session) {
		const router = useRouter();
		const [client, setClient] = useState([]);
		const [error, setError] = useState("");
		const listarStyle = style();

		// pesquisa cliente
		const getClientLIst = async () => {
			const cpf = document.getElementById("cpf").value;
			const url = `../../api/clients/${cpf}`;
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

		if (error) {
			return <Error />;
		} else {
			return (
				<>
					<Menu />
					<div className={listarStyle.container}>
						<div className={listarStyle.header}>
							<TextField
								placeholder='Informe o CPF do cliente'
								id='cpf'
							/>
							<Button onClick={getClientLIst}>Listar</Button>
						</div>
						<table>
							<thead>
								<tr className={listarStyle.trow}>
									<th className={listarStyle.tcolumn}>
										<Typography>#</Typography>
									</th>
									<th className={listarStyle.tcolumn}>
										<Typography>ID</Typography>
									</th>
									<th className={listarStyle.tcolumn}>
										<Typography>Nome</Typography>
									</th>
									<th className={listarStyle.tcolumn}>
										<Typography>CPF</Typography>
									</th>
									<th className={listarStyle.tcolumn}></th>
								</tr>
							</thead>
							{client?.map((event, id) => {
								return (
									<>
										<tbody>
											<tr className={listarStyle.trow}>
												<td className={listarStyle.tcolumn}>
													<Typography>{id}</Typography>
												</td>
												<td className={listarStyle.tcolumn}>
													<Typography>{event._id}</Typography>
												</td>
												<td className={listarStyle.tcolumn}>
													<Typography>{event.full_name}</Typography>
												</td>
												<td className={listarStyle.tcolumn}>
													<Typography>{event.cpf}</Typography>
												</td>
												<td className={listarStyle.tcolumn}>
													<Button
														onClick={() => abrirOS(event._id)}
													>
														Abrir OS
													</Button>
												</td>
											</tr>
										</tbody>
									</>
								);
							})}
						</table>
					</div>
				</>
			);
		}
	}
};

export default Listar;
