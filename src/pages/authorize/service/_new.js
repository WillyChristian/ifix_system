import React from "react";
import axios from "axios";
import {useSession} from 'next-auth/client'
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
import Menu from "../../components/menu";
import Login from '../../login/index'

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
}));

const _new = () => {
	const [session] = useSession()

	if(!session) return <Login/>
	if(session){
		const classes = useStyles();

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
	
		return (
			<>
				<Menu />
				<div className={classes.main}>
					<div className={classes.cli_container}>
						<div className={classes.sub_container}>
							<div className={classes.search_container}>
								<TextField placeholder='CPF' id='cpf' />
								<Button onClick={() => searchById()}>Buscar</Button>
							</div>
							{/* <TextField placeholder='ID' id='_id' value={client._id} /> */}
							<TextField placeholder='Nome' id='full_name' />
							<TextField placeholder='Celular' id='phone' />
						</div>
						<TextField
							multiline
							placeholder='Problema Reportado'
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
								<Select labelId='_tec' name='tecnician'>
									{/* {tec.map((elemento) => {
										return (
											<MenuItem value={elemento._id}>
												{elemento.name}
											</MenuItem>
										);
									})} */}
								</Select>
							</FormControl>
							<FormControl className={classes.formControl}>
								<InputLabel label='Atendente' id='_seller'>
									Atendente
								</InputLabel>
								<Select labelId='_seller' name='attendant'>
									{/* {att.map((element) => {
										return (
											<MenuItem value={element._id}>
												{element.name}
											</MenuItem>
										);
									})} */}
								</Select>
							</FormControl>
						</div>
						<div className={classes.bloco_2}>
							<div className={classes.sub_container}>
								<FormControl>
									<InputLabel id='part'>Peça</InputLabel>
									<Select labelId='part' name='part'>
										{/* {Parts.Part_Type.map((type) => {
											return <MenuItem value={type}>{type}</MenuItem>;
										})} */}
									</Select>
								</FormControl>
								<FormControl>
									<InputLabel id='model'>Modelo</InputLabel>
									<Select labelId='model' name='model'>
										{/* {Parts.Models.map((model) => {
											return <MenuItem value={model}>{model}</MenuItem>;
										})} */}
									</Select>
								</FormControl>
								<FormControl>
									<InputLabel id='color'>Cor</InputLabel>
									<Select labelId='color' name='color'>
										{/* {Parts.Colors.map((color) => {
											return <MenuItem value={color}>{color}</MenuItem>;
										})} */}
									</Select>
								</FormControl>
								<FormControl>
									<InputLabel id='quality'>Tipo</InputLabel>
									{/* <Select labelId='quality' name='quality'>
										{Parts.Quality.map((qlty) => {
											return <MenuItem value={qlty}>{qlty}</MenuItem>;
										})}
									</Select> */}
								</FormControl>
							</div>
							<TextField
								multiline
								label='Resolução'
								label='Resolução do Problema'
								id='resolution'
								fullWidth
								rows={8}
								variant='outlined'
							/>
						</div>
					</div>
	
					<div className={classes.cli_container}>
						<div className={classes.divForm}>
							<Button
								variant='outlined'
								color='primary'
								onClick={() => alert("Formulário enviado")}
							>
								Enviar
							</Button>
						</div>
					</div>
				</div>
			</>
		);
	}
};

export default _new;
