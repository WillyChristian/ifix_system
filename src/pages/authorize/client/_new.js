import React, { useState } from "react";
import {
	Button,
	makeStyles,
	TextField,
	Typography,
	Container,
} from "@material-ui/core";
import { useSession } from "next-auth/client";
import { useFormik } from "formik";
import * as Yup from "yup";

import Menu from "../../components/menu";
import Login from "../../login/index";
import axios from "axios";

const style = makeStyles((theme) => ({
	container: {
		height: "100vh",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		backgroundColor: "#f4f4f4",
	},
	row: {
		width: "100%",
		margin: "0px",
		padding: "0px",
		display: "flex",
		justifyContent: "space-between",
	},
	form: {
		width: "100%",
		maxWidth: "700px",
		padding: "2rem 1rem",
		"& .MuiTextField-root": {
			margin: ".5em .5em",
			"& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
				WebkitAppearance: "none",
			},
		},
		"& .MuiContainer-root": {
			justifyContent: "center",
		},
	},
	fieldset: {
		padding: "1em",
	},
	button: {
		height: "3.5em",
	},
}));

const Cliente = () => {
	const [session] = useSession();

	if (!session) return <Login />;
	if (session) {
		const [cep, setCep] = useState({
			street: "",
			neighbour: "",
			city: "",
			state: "",
		});
		const formStyle = style();
		//Validacao do formulário
		const formik = useFormik({
			initialValues: {
				full_name: "",
				cpf: "",
				phone: "",
				cep: "",
				street: "",
				number: "",
				neighbour: "",
				city: "",
				state: "",
			},
			onSubmit: (values) => {
				alert(JSON.stringify(values, null, 2));
				// SERA IPLEMENTADO APÓS CONCLUIR OS PROBLEMAS DO FORMULÁRIO
				// const response = await fetch("/api/clients/create", {
				// method: "POST",
				// body: JSON.stringify(values)
				// });
				// if (response.status === 200) {
				// 	alert("Cadastro Realizado!");
				// } else {
				// 	alert("Verifique os dados e tente novamente");
				// }

			},
			validationSchema: Yup.object({
				full_name: Yup.string()
					.max(40, "Nome deve conter no máximo 50 caracteres")
					.required("Nome é obrigatório"),
				cpf: Yup.string()
					.length(11, "CPF deve conter 11 dígitos")
					.required("CPF é obrigatório"),
				phone: Yup.string()
					.length(11, "Telefone deve conter 11 dígitos")
					.required("Telefone é obrigatório"),
				cep: Yup.string().length(8, "CEP deve conter 8 dígitos").required("CEP é obrigatório"),
				number: Yup.string().required("Número é obrigatório"),
			}),
		});

		const searchCep = () => {
			const userCep = document.getElementById("cep").value;
			if (!userCep) {
				alert("Informe um CEP para pesquisa");
			} else {
				axios
					.get(`https://viacep.com.br/ws/${userCep}/json/`)
					.then((response) => {
						const r = response.data;
						if (r.erro) {
							alert("O CEP digitado não existe");
						} else {
							setCep({
								street: r.logradouro ,
								neighbour: r.bairro,
								city: r.localidade,
								state: r.uf,
							});
						}
					})
					.catch((err) => alert(err));
			}
		};
		return (
			<>
				<Menu />
				<div className={formStyle.container}>
					<form className={formStyle.form} onSubmit={formik.handleSubmit}>
						<fieldset className={formStyle.fieldset}>
							<legend>
								<Typography variant='h4'>
									Cadastro de Cliente
								</Typography>
							</legend>
							<TextField
								id='full_name'
								label='Nome Completo'
								type='text'
								variant='outlined'
								fullWidth
								onChange={formik.handleChange}
								helperText={formik.errors.full_name}
								error={formik.errors.full_name}
							/>
							<div className={formStyle.row}>
								<div className={formStyle.row}>
									<TextField
										id='cpf'
										label='CPF'
										type='number'
										variant='outlined'
										placeholder='Apenas números'
										autoComplete='off'
										fullWidth
										onChange={formik.handleChange}
										helperText={formik.errors.cpf}
										error={formik.errors.cpf}
									/>
								</div>
								<div className={formStyle.row}>
									<TextField
										id='phone'
										label='Celular'
										type='text'
										variant='outlined'
										placeholder='Ex.: 12912345678'
										onChange={formik.handleChange}
										helperText={formik.errors.phone}
										error={formik.errors.phone}
										fullWidth
									/>
								</div>
							</div>
							<div style={{ display: "flex", alignItems: "center" }}>
								<TextField
									id='cep'
									label='CEP'
									type='number'
									variant='outlined'
									onChange={formik.handleChange}
									helperText={formik.errors.cep}
									error={formik.errors.cep}
								/>
								<Button
									variant='outlined'
									size='small'
									className={formStyle.button}
									color='primary'
									onClick={() => searchCep()}
								>
									Pesquisar
								</Button>
							</div>
							<div className={formStyle.row}>
								<TextField
									id='street'
									value={cep.street}
									fullWidth
									variant='outlined'
									onChange={formik.handleChange}
								/>
								<TextField
									id='number'
									label='Número'
									variant='outlined'
									onChange={formik.handleChange}
									helperText={formik.errors.number}
									error={formik.errors.number}
									
								/>
							</div>
							<div className={formStyle.row}>
								<div className={formStyle.row}>
									<TextField
										id='neighbour'
										variant='outlined'
										value={cep.neighbour}
										onChange={formik.handleChange}
									/>
								</div>
								<div className={formStyle.row}>
									<TextField
										id='city'
										variant='outlined'
										value={cep.city}
										onChange={formik.handleChange}
									/>
								</div>
								<div className={formStyle.row}>
									<TextField
										id='state'
										variant='outlined'
										onChange={formik.handleChange}
										value={cep.state}
									/>
								</div>
							</div>
							<Container>
								<Button type='submit'>Cadastrar</Button>
							</Container>
						</fieldset>
					</form>
				</div>
			</>
		);
	}
};
export default Cliente;
