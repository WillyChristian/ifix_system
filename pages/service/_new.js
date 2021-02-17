import React, { useState, useEffect } from "react";
import { connectToDatabase } from "../../util/mongodb";
import {
	makeStyles,
	TextField,
	InputLabel,
	Select,
	MenuItem,
	Button,
	FormControl,
} from "@material-ui/core";

//components
import Menu from "../components/menu";
import Err from "../components/error";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	//layout da págna
	main: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marging: "2px auto",
		position: "absolute",
		width: "100%",
		height: "90vh",
	},

	// Layout dados cliente
	cli_container: {
		position: "relative",
		width: "100%",
		maxWidth: "900px",
		display: "flex",
		alignItems: "space-around",
		backgroundColor: "#fafafa",
		margin: "1rem",
		padding: "1rem",
		border: "2px solid #4a4a4a",
	},
	sub_container: {
		margin: "0 1em",
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		width: "50%",
	},
	search_container: {
		display: "flex",
		alignItems: "space-around",
		width: "100%",
		margin: "0",
	},

	// Layout do componente da manutenção
	maint_contaniner: {
		position: "relative",
		width: "100%",
		maxWidth: "900px",
		display: "flex",
		flexDirection: "column",
		alignItems: "space-around",
		backgroundColor: "#fafafa",
		margin: "1rem",
		padding: "1rem",
		border: "2px solid #4a4a4a",
	},
	bloco_2: {
		position: "relative",
		width: "100%",
		maxWidth: "900px",
		display: "flex",
		alignItems: "space-around",
		padding: "1rem",
	},
	divForm: {
		display: "flex",
		flexDirection: "row",
	},
	formControl: {
		width: "50%",
		margin: "0 1rem",
	},

	//layout comentários
}));

const _new = ({ attendant, tecnicians, parts }) => {
	const [client, setClient] = useState({
		full_name: "",
		id: "",
		phone: "",
	});
	const [att, setAtt] = useState(JSON.parse(attendant));
	const [part, setPart] = useState(JSON.parse(parts));
	const [tec, setTec] = useState(JSON.parse(tecnicians));
	// const [comments, setComments] = useState([]);
	const classes = useStyles();

	/*

		Esta função deverá ser implementada em uma próxima etapa

	function addComment() {
		const comm = document.querySelector("#comm").value;
		const user = localStorage.getItem();
		const date = new Date().toString();
		axios
			.post(`api/os/comm`, {
				body: {
					comment: comm,
					user: user,
					date,
				},
			})
			.then((e) => {
				setComments(e.data);
			});
	}

	useEffect(() => {}, [comments]);
	*/

	/* Pesquisa cliente por CPF */
	const searchById = async () => {
		const _id = document.querySelector("#cpf").value;
		axios.get(`../api/clients/${_id}`).then((response) => {
			const client = response.data[0];
			setClient({
				full_name: client.full_name,
				phone: client.phone,
				id: client._id,
			});
		});
	};

	return (
		<>
			<Menu />
			<div className={classes.main}>
				<div className={classes.cli_container}>
					<div className={classes.sub_container}>
						<div className={classes.search_container}>
							<TextField label='CPF' id='cpf' />
							<Button onClick={() => searchById()}>Buscar</Button>
						</div>
						<TextField label='ID' id='_id' value={client.id} />
						<TextField
							label='Nome'
							id='full_name'
							value={client.full_name}
						/>
						<TextField label='Celular' id='phone' value={client.phone} />
					</div>
					<TextField
						multiline
						label='Problema Reportado'
						id='device_issue'
						fullWidth
						rows={8}
						variant='outlined'
					/>
				</div>

				<div className={classes.maint_contaniner}>
					<div className={classes.divForm}>
						<FormControl className={classes.formControl}>
							<InputLabel label='Técnico' id='_tec'>
								Técnico
							</InputLabel>
							<Select labelId='_tec'>
								{tec.map((elemento) => {
									return (
										<MenuItem value={elemento._id}>
											{elemento.name}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
						<FormControl className={classes.formControl}>
							<InputLabel label='Atendente' id='_seller'>
								Atendente
							</InputLabel>
							<Select labelId='_tec'>
								{att.map((element) => {
									return (
										<MenuItem value={element._id}>
											{element.name}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
					</div>
					<div className={classes.bloco_2}>
						<div className={classes.sub_container}>
							<FormControl>
								<InputLabel id='produto_1'></InputLabel>
								<Select labelId='produto_1'>
									{part.map((elemento) => {
										<MenuItem value={key}>
											{elemento.peca_name}
										</MenuItem>;
									})}
								</Select>
							</FormControl>
							<FormControl>
								<InputLabel id='produto_2'>Peças</InputLabel>
								<Select labelId='produto_2'>
									{/* {pecas.map((elemento) => {
										<MenuItem value={key}>
											{elemento.peca_name}
										</MenuItem>;
									})} */}
								</Select>
							</FormControl>
							<FormControl>
								<InputLabel id='produto_3'>Peças</InputLabel>
								<Select labelId='produto_3'>
									{/* {pecas.map((elemento) => {
										<MenuItem value={key}>
											{elemento.peca_name}
										</MenuItem>;
									})} */}
								</Select>
							</FormControl>
						</div>
						<TextField
							multiline
							label='Resolução'
							label='Resolução do Problema'
							id='resolution'
							fullWidth
							rows={6}
							variant='outlined'
						/>
					</div>
				</div>

				{/*
				<div className={classes.maint_container}>
					<TextField id='comm' />
					<div className={classes.divForm}>
						 	Deverá ser inserido nas próximas atualizações
							 <span>{att.full_name}</span> 
						 
						<span>{Date().toString()}</span>
					</div>
				</div>
				*/}
			</div>
		</>
	);
};

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();

	const temp_tec = await db
		.collection("employees")
		.find({ category: "Técnico" })
		.toArray();
	const temp_att = await db
		.collection("employees")
		.find({ category: "Atendente" })
		.toArray();

	const temp_part = await db
		.collection("produtos")
		.find({ type: "Manutenção" })
		.toArray();

	const tecnicians = JSON.stringify(temp_tec);
	const attendant = JSON.stringify(temp_att);
	const parts = JSON.stringify(temp_part);

	return {
		props: { tecnicians, attendant, parts },
	};
}
export default _new;
