import React from "react";
import useSWR from "swr";
import { useSession } from "next-auth/client";
import {
	Button,
	makeStyles,
	TextField,
	Typography,
	Container,
	InputLabel,
	Paper,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

//components
import Menu from "../../components/menu";
import Error from "../../components/error";
import LoadPage from "../../components/error";
import Login from "../../login/index";

const fetcher = (url) => fetch(url).then((r) => r.json());
const styles = makeStyles({
	divClient: {
		padding: "1rem",
		display: "flex",
		justifyContent: "center",
		"& .MuiPaper-root": {
			width: "70%",
			padding: "1rem",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			"& #divisor": {
				display: "flex",
				flexDirection: "row",
				width: "100%",
				justifyContent: "center",
				"& .MuiTextField-root": {
					margin: "1rem",
					width: "50%",
				},
			},
		},
	},
	divDevice: {
		padding: "1rem",
		display: "flex",
		justifyContent: "center",
		"& .MuiPaper-root": {
			width: "70%",
			padding: "1rem",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			"& #divisor": {
				display: "flex",
				flexDirection: "row",
				width: "100%",
				justifyContent: "center",
				"& .MuiTextField-root": {
					margin: "1rem",
					width: "50%",
				},
			},
		},
	},
	divCondition: {
		padding: "1rem",
		display: "flex",
		justifyContent: "center",
		"& .MuiPaper-root": {
			display: "flex",
			flexDirection: "column",
			padding: "1rem",
			width: "70%",
			"& #divisor": {
				margin: ".5rem",
				display: "flex",
				justifyContent: "space-around",
				"& #sub-divisor": {
					display: "flex",
					flexDirection: "column",
					"$ .MuiTextField-root": {
						width: "50%",
					},
				},
			},
		},
	},
	divDescription: {
		padding: "1rem"
	},
});

const _new = () => {
	// Verificar se o usuário esta logado
	const [session] = useSession();
	const formStyles = styles();
	// Carrega todos os funcionários no BD
	const { data, error } = useSWR("../../api/employee/_read", fetcher);

	if (!session) return <Login />;
	if (session) {
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
		if (error) return <Error />;
		if (!data) return <LoadPage />;

		return (
			<>
				<Menu />
				<div className='main'>
					<form action=''>
						<fieldset>
							<Container className={formStyles.divClient}>
								<Paper className={formStyles.divClient} elevation={3}>
									<legend>
										<Typography variant={"h5"}>
											Dados do cliente
										</Typography>
									</legend>
									<div id='divisor'>
										<TextField type='text' placeholder='Nome' />
										<TextField type='text' placeholder='CPF' />
										<TextField type='text' placeholder='E-mail' />
									</div>
									<div id='divisor'>
										<TextField
											type='text'
											placeholder='Telefone Residencial'
										/>
										<TextField type='text' placeholder='Celular' />
										<TextField
											type='text'
											placeholder='Telefone Residencial'
										/>
									</div>
								</Paper>
							</Container>

							<Container className={formStyles.divDevice}>
								<Paper elevation={3}>
									<legend>
										<Typography variant={"h5"}>
											Dados do equipamento
										</Typography>
									</legend>
									<div id='divisor'>
										<TextField type='text' placeholder='marca' />
										<TextField type='text' placeholder='modelo' />
									</div>
									<div id='divisor'>
										<TextField type='text' placeholder='cor' />
										<TextField type='text' placeholder='memória' />
										<TextField type='text' placeholder='serial' />
									</div>
								</Paper>
							</Container>

							<Container className={formStyles.divCondition}>
								<Paper elevation={3}>
									<legend>
										<Typography variant={"h5"}>
											Condições gerais
										</Typography>
									</legend>
									<div id='divisor'>
										<div id='sub-divisor'>
											<InputLabel htmlFor='carcaca'>
												Estética
											</InputLabel>
											<TextField
												variant='outlined'
												placeholder='Carcaça, Parafusos, manchas no LCD, etc.'
												name='carcaca'
												id='carcaca'
												multiline
												rows={5}
											/>
										</div>
										<div id='sub-divisor'>
											<InputLabel htmlFor='camera'>
												Câmeras
											</InputLabel>
											<TextField
												variant='outlined'
												name='camera'
												id='camera'
												multiline
												fullWidth
												rows={5}
											/>
										</div>
										<div id='sub-divisor'>
											<InputLabel htmlFor='sound'>Som</InputLabel>
											<TextField
												variant='outlined'
												name='sound'
												id='sound'
												multiline
												rows={5}
												placeholder='Auricular (onde você ouve durante a ligação) e a caixa de som'
											/>
										</div>
									</div>
									<div id='divisor'>
										<div id='sub-divisor'>
											<InputLabel htmlFor='microfone'>
												Microfones
											</InputLabel>
											<TextField
												variant='outlined'
												name='microfone'
												id='microfone'
												cols='15'
												multiline
												rows={5}
												placeholder='Iphones tem 3, o da ligação, ao lado do carregador; da câmera frontal, ao lado da auricular e da câmera traseira, também ao lado da câmera'
											/>
										</div>
										<div id='sub-divisor'>
											<InputLabel htmlFor='rede'>Rede</InputLabel>
											<TextField
												variant='outlined'
												name='rede'
												id='rede'
												multiline
												rows={5}
												placeholder='(WiFi, Operadora e Bluetooth)'
											/>
										</div>
										<div id='sub-divisor'>
											<InputLabel htmlFor='other'>Outros</InputLabel>
											<TextField
												variant='outlined'
												name='other'
												id='other'
												multiline
												rows={5}
												placeholder='Algo que não foi mencionado ainda'
											/>
										</div>
									</div>
								</Paper>
							</Container>

							<Container className={formStyles.divDescription}>
								<Paper elevation={3}>
									<fieldset>
										<Typography>Descrição do Problema</Typography>
									</fieldset>
									<div id='divisor'>
										<TextField
											name='probDescription'
											id='probDescription'
											multiline
											valiant='outlined'
											rows={5}
											placeholder='Seja sussinto e objetivo focando nos defeitos relatados'
										/>
									</div>
								</Paper>
							</Container>
							<div className='prazo'>
								<InputLabel htmlFor='in'>
									Data e hora de Enstrada
								</InputLabel>
								<TextField type='datetime-local' />
								<InputLabel htmlFor='in'>
									Data e hora de entrega
								</InputLabel>
								<TextField type='datetime-local' />
							</div>
						</fieldset>
					</form>
				</div>
			</>
		);
	}
};

export default _new;
