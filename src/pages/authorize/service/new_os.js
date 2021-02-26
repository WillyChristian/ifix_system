import React, { useState } from "react";
import {
	makeStyles,
	TextField,
	InputLabel,
	Select,
	MenuItem,
	Button,
	FormControl,
	Typography,
	Container,
	Grid,
} from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";

import { values, validation } from "./values";
import Menu from "../components/menu";

const styles = makeStyles({
	label: {
		borderBottom: "1px solid",
	},
});

const NewOs = () => {
	const Formik = useFormik({
		initialValues: values,
		validationSchema: validation,
	});

	const usestyles = styles();
	return (
		<>
			<Menu />
			<div pai>
				{/*******************************************   INSERE CLIENTE  ********************************/}
				<div cliente>
					<Container className={usestyles.label}>
						<Typography>Dados do Cliente</Typography>
					</Container>
					<Grid container spacing={2}>
						<Grid item>
							<TextField label='CPF' name='cpf' />
						</Grid>
						<Grid item>
							<Button>Pesquisar</Button>
						</Grid>
					</Grid>
				</div>

				{/*******************************************   INSERE DDADOS CELULAR  ********************************/}
				<div telefone>
					<Container>
						<Typography>Dados do Cliente</Typography>
					</Container>
					<Grid container spacing={2}>
						<Grid item>
							<TextField label='Nome' name='full_name' />
						</Grid>
						<Grid item>
							<Button>Pesquisar</Button>
						</Grid>
					</Grid>
				</div>

				{/*******************************************   INSERE RESULTADO  ********************************/}
				<div tecnico>
					<Container>
						<Typography>Dados do Cliente</Typography>
					</Container>
					<div></div>
				</div>

				{/*******************************************   INSERE VALORES  ********************************/}
				<div tecnico>
					<Container>
						<Typography>Dados do Cliente</Typography>
					</Container>
					<div></div>
				</div>
			</div>
		</>
	);
};

export default NewOs;
