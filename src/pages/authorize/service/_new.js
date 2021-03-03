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
	Divider,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

//Componentes
import Menu from "../../components/menu";
import Error from "../../components/error";
import LoadPage from "../../components/error";
import Login from "../../login/index";

// Função para trazer os funcionários do BD
const fetcher = (url) => fetch(url).then((r) => r.json());

// Função para gerar os estilos
const styles = makeStyles({
	main: {
		width: "100%",
		height: "150vh",
	},
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
	divReport: {
		padding: "1rem",
		display: "flex",
		justifyContent: "center",
		"& .MuiPaper-root": {
			padding: "1rem",
			width: "70%",
			display: "flex",
			flexDirection: "column",
			"& #sub-divisor": {
				display: "felx",
				flexDirection: "column",
				margin: "1rem",
			},
		},
	},
	divDeadline: {
		padding: "1rem",
		display: "flex",
		justifyContent: "center",
		"& .MuiPaper-root": {
			padding: "1rem",
			width: "70%",
			display: "flex",
			flexDirection: "column",
			"& #divisor": {
				width: "100%",
				display: "flex",
				"& > div": {
					margin: "1rem",
				},
			},
		},
	},
});

const _new = () => {
	// Verificar se o usuário esta logado
	const [session] = useSession();

	// Variável de estilo
	const formStyles = styles();

	//Validação do Formulário
	const formik = useFormik({
		initialValues: {
			//dados do formulário
		},
		onSubmit: {
			//Salva os dados no banco
		},
		validationSchema: Yup.object({
			//Validação dos campos preenchidos
		}),
	});

	// Carrega todos os funcionários no BD
	const { data, error } = useSWR("../../api/employee/_read", fetcher);

	//Verifica se há uma sessão ativa e rotona à página login caso não haja
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

		//Caso haja erro ao carregar os dados do banco redireciona à uma página de erro
		if (error) return <Error />;
		if (!data) return <LoadPage />;

		return (
			<>
				<Menu />
				<div className={formStyles.main}>
					<form action={formik.handleSubmit}>
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
										<InputLabel htmlFor='carcaca'>Exerior</InputLabel>
										<TextField
											variant='outlined'
											placeholder='Carcaça, Parafusos, LCD, Touch, etc.'
											name='carcaca'
											id='carcaca'
											multiline
											rows={5}
										/>
									</div>
									<div id='sub-divisor'>
										<InputLabel htmlFor='camera'>Câmeras</InputLabel>
										<TextField
											placeholder='Manchas, foco, distorções na imagem (borrões ou esbranquiçado)'
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
											placeholder='Câmeras (vídeo), ligação, gravador de voz'
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
											placeholder='WiFi, Operadora e Bluetooth'
										/>
									</div>
									<div id='sub-divisor'>
										<InputLabel htmlFor='other'>
											Sensores e outros
										</InputLabel>
										<TextField
											variant='outlined'
											name='other'
											id='other'
											multiline
											rows={5}
											placeholder='Luminosidade, brilho automático ou outro detalhe que possa ser mencionado'
										/>
									</div>
								</div>
							</Paper>
						</Container>

						<Container className={formStyles.divReport}>
							<Paper elevation={3}>
								<legend>
									<Typography variant={"h5"}>
										Descrição do Problema
									</Typography>
								</legend>
								<div id='sub-divisor'>
									<TextField
										fullWidth
										multiline
										rows={5}
										variant='outlined'
										placeholder='Descrição sussinta e objetiva do problema'
									/>
									<div className='att-responsible'>
										<InputLabel htmlFor='att-list'>
											Atentendente Responsável
										</InputLabel>
										<select id='att-list'>
											<option value='Milena'>Milena</option>
											<option value='Helen'>Helen</option>
											<option value='Evelyn'>Evelyn</option>
										</select>
									</div>
								</div>
							</Paper>
						</Container>

						<Container className={formStyles.divDeadline}>
							<Paper elevation={3}>
								<legend>
									<Typography variant={"h5"}>Prazo</Typography>
								</legend>
								<div id='divisor'>
									<div>
										<InputLabel htmlFor='in'>
											Data e hora de Enstrada
										</InputLabel>
										<TextField type='datetime-local' />
									</div>
									<div>
										<InputLabel htmlFor='in'>
											Data e hora de entrega
										</InputLabel>
										<TextField type='datetime-local' />
									</div>
								</div>
							</Paper>
						</Container>
						<Divider />
						<Typography variant={"h4"}>Parte Técnica</Typography>
						<Divider />
						<Container className={formStyles.divReport}>
							<Paper elevation={3}>
								<legend>
									<Typography variant={"h5"}>
										Resolução do problema
									</Typography>
								</legend>
								<div id='sub-divisor'>
									<TextField
										name='solution'
										fullWidth
										multiline
										rows={5}
										variant='outlined'
										placeholder='Descrição sussinta e objetiva do que foi feito'
									/>
									<div className='tec-responsible'>
										<InputLabel htmlFor='tec-list'>
											Técnico Responsável
										</InputLabel>
										<select id='tec-list'>
											<option value='willy'>Willy</option>
											<option value='orlando'>Orlando</option>
											<option value='bob'>Bob</option>
										</select>
									</div>
								</div>
							</Paper>
						</Container>
						<div className='parts'>
							
						</div>
					</form>
				</div>
			</>
		);
	}
};

export default _new;
