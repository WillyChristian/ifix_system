import React, { useState } from "react";
import { useSession } from "next-auth/client";
import { makeStyles, Button, Grid, TextField } from "@material-ui/core";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@material-ui/core";
import axios from "axios";

//Components
import Login from "../../login/index";
import Menu from "../../components/menu";

const style = makeStyles({
	main: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "start",
		margin: 'auto'
	},
	search: {
		display: "flex",
		width: "100%",
		padding: "1rem 0rem",
		justifyContent: "center",
		alignItems: "start",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		maxWidth: "700px",
		height: "70vh",
		padding: "2rem 0rem",
		justifyContent: "center",
		alignItems: "center",
	},
	table: {
		minWidth: 650,
	},
});

const osForm = () => {
	const [session] = useSession();
	const [data, setData] = useState({
		os: "",
		date: "",
		status: "",
		client: "",
	});
	const componentStyle = style();
	if (!session) return <Login />;
	if (session) {
		//Função para buscar os dados no banco
		const getListSo = () => {
			const os = document.querySelector("#os").value;
			axios.get(`../../api/service_orders/${os}`).then((response) => {
				const data = response.data[0];
				setData({
					client: data.client.name,
					os: data.soNum,
					date: data.in.enterDate,
					status: data.status,
				});
			});
		};

		// criação da tabela
		function createData(client, os, date, status) {
			return { client, status, os, date };
		}

		const rows = [createData(data.client, data.os, data.date, data.status)];
		return (
			<>
				<Menu />
				<div className={componentStyle.main}>
					<div className={componentStyle.search}>
						<Grid item>
							<TextField id='os' placeholder='Número da OS' />
						</Grid>
						<Grid item>
							<Button onClick={() => getListSo()}>Consulta</Button>
						</Grid>
					</div>
					<div className={componentStyle.content}>
						<TableContainer component={Paper}>
							<Table
								className={componentStyle.table}
								size='small'
								aria-label='a dense table'
							>
								<TableHead>
									<TableRow>
										<TableCell align='right'>OS</TableCell>
										<TableCell align='right'>
											Nome do Cliente
										</TableCell>
										<TableCell align='right'>
											Data de Abertura
										</TableCell>
										<TableCell align='right'>Status da OS</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<>
											<TableCell align='right'>{row.os}</TableCell>
											<TableCell align='right'>
												{row.client}
											</TableCell>
											<TableCell align='right'>{row.date}</TableCell>
											<TableCell align='right'>
												{row.status}
											</TableCell>
										</>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				</div>
			</>
		);
	}
};

export default osForm;
