import React, { useState, useEffect } from "react";
import { connectToDatabase } from "../../util/mongodb";
import {
	makeStyles,
	TextField,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from "@material-ui/core";

//components
import Menu from "../components/menu";
import Err from "../components/error";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	main: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marging: "2px auto",
		position: "absolute",
		width: "100%",
		height: "100%",
	},
	container: {
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
}));

const _new = ({ attendant, tecnicians }) => {
	const [client, setClient] = useState({
		full_name: "",
		cpf: "",
		phone: "",
	});

	const [att, setAtt] = useState(JSON.parse(attendant));
	const [tec, setTec] = useState(JSON.parse(tecnicians));

	const classes = useStyles();

	/* Pesquisa cliente por ID */
	const searchById = async () => {
		const _id = document.querySelector("#_id").value;
		axios.get(`../api/clients/${_id}`).then((response) => {
			const client = response.data[0];
			setClient({
				full_name: client.full_name,
				phone: client.phone,
				cpf: client.cpf,
			});
		});
	};

	return (
		<>
			<Menu />
			<div className={classes.main}>
				<div className={classes.container}>
					<div className={classes.sub_container}>
						<div className={classes.search_container}>
							<TextField label='ID' id='_id' />
							<Button onClick={() => searchById()}>Buscar</Button>
						</div>

						<TextField
							label='Nome'
							id='full_name'
							value={client.full_name}
						/>
						<TextField label='CPF' id='cpf' value={client.cpf} />
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

				<div className={classes.container}>
					<div className={classes.sub_container}>
						<InputLabel id='produtos'>Peças</InputLabel>
						<Select labelId='_pecas'>
							{/* { 
										pecas.map( elemento =>{
											<MenuItem value={key} >{elemento.peca_name}</MenuItem>
										} )
									} */}
							<MenuItem>Peça 1</MenuItem>
							<MenuItem>Peça 2</MenuItem>
							<MenuItem>Peça 3</MenuItem>
						</Select>
						<InputLabel id='_tec'>Técnico</InputLabel>
						<Select labelId='_tec'>
							{tec.map((elemento) => {
								return (
									<MenuItem value={elemento._id}>
										{elemento.name}
									</MenuItem>
								);
							})}
						</Select>
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
					</div>
					<TextField
						multiline
						label='Resolução'
						label='Resolução do Problema'
						id='resolution'
						fullWidth
					/>
				</div>
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

	const tecnicians = JSON.stringify(temp_tec);
	const attendant = JSON.stringify(temp_att);

	return {
		props: { tecnicians, attendant },
	};
}
export default _new;
