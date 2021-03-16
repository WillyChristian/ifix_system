import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, TextField, makeStyles, Typography, Container} from "@material-ui/core";
import { useSession } from "next-auth/client";

//table
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
						<TableContainer component={Container}>
							<Table>
								<TableHead>
									<TableRow className={listarStyle.trow}>
										<TableCell align='center'>
											<Typography>#</Typography>
										</TableCell>
										<TableCell align='center'>
											<Typography>ID</Typography>
										</TableCell>
										<TableCell align='center'>
											<Typography>Nome</Typography>
										</TableCell>
										<TableCell align='center'>
											<Typography>CPF</Typography>
										</TableCell>
										<TableCell align='center'></TableCell>
										<TableCell align='center'></TableCell>
									</TableRow>
								</TableHead>
								{client?.map((event, id) => {
									return (
										<>
											<TableBody>
												<TableRow className={listarStyle.trow}>
													<TableCell align='center'>
														<Typography>{id}</Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography>{event._id}</Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography>
															{event.full_name}
														</Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography>{event.cpf}</Typography>
													</TableCell>
													<TableCell align='center'>
														<Button
															variant='contained'
															color='primary'
															onClick={() => alert('Função ainda por criar')}
															>
															Abrir OS
														</Button>
													</TableCell>
													<TableCell align='center'>
														<Button
															color='secondary'
															variant='contained'
															onClick={() => alert('Função ainda por criar')}
														>
															Editar
														</Button>
													</TableCell>
												</TableRow>
											</TableBody>
										</>
									);
								})}
							</Table>
						</TableContainer>
					</div>
				</>
			);
		}
	}
};

export default Listar;
