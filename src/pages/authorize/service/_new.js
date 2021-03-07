import React, { useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/client";
import {
  MenuItem,
  makeStyles,
  TextField,
  Typography,
  Container,
  InputLabel,
  Paper,
  Divider,
  Select,
  Button,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHead,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

//Componentes
import Menu from "../../components/menu";
import Error from "../../components/error";
import LoadPage from "../../components/error";
import Login from "../../login/index";
import ClientContent from "./new_components/client_content";
import DeviceContent from "./new_components/device_content";
import ConditionsContent from "./new_components/condition_content";
import ReportContent from "./new_components/report_content";

// Função para trazer os dados do BD
const fetcher = (url) => fetch(url).then((r) => r.json());
const getProducts = (url) => fetch(url).then((r) => r.json());

// Função para gerar os estilos
const styles = makeStyles({
	main: {
		width: "100%",
		height: "250vh",
	},
	div: {
		padding: "1rem",
		display: "flex",
		justifyContent: "center",
		"& .MuiPaper-root": {
			width: "70%",
			padding: "1rem",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
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
  const { data: products } = useSWR("../../api/products/read", getProducts);
  const [parts, setParts] = useState([
    {
      qtd: "",
      peca: "",
      price: "",
    },
  ]);

  // Variável de estilo
  const formStyles = styles();

	//Validação do Formulário
	const formik = useFormik({
		initialValues: {
			name: "",
			cpf: "",
			email: "",
			phone_home: "",
			cellphone: "",
			brand: "",
			model: "",
			color: "",
			capacity: "",
			sn: "",
			outside: "",
			camera: "",
			sound: "",
			microfone: "",
			network: "",
			prob_descrpt: ""
		},
		onSubmit: {
			//Salva os dados no banco
		},
		validationSchema: Yup.object({
			//Validação dos campos preenchidos
		}),
	});

  // Carrega todos os funcionários no BD
  const { data: employee, error } = useSWR("../../api/employee/_read", fetcher);

	//Verifica se há uma sessão ativa e rotona à página login caso não haja
	if (!session) return <Login />;
	if (session) {
		//Caso haja erro ao carregar os dados do banco redireciona à uma página de erro
		if (error) return <Error />;
		if (!employee) return <LoadPage />;

		return (
			<>
				<Menu />
				<div className={formStyles.main}>
					<form action={formik.handleSubmit}>
						<Container className={formStyles.div}>
							<Paper elevation={3}>
								<ClientContent
									handleChange={formik.handleChange}
									values={formik.values}
								/>
							</Paper>
						</Container>

						<Container className={formStyles.div}>
							<Paper elevation={3}>
								<DeviceContent
									handleChange={formik.handleChange}
									values={formik.values}
								/>
							</Paper>
						</Container>

						<Container className={formStyles.div}>
							<Paper elevation={3}>
								<ConditionsContent
									handleChange={formik.handleChange}
									values={formik.values}
								/>
							</Paper>
						</Container>

						<Container className={formStyles.div}>
							<Paper elevation={3}>
								<ReportContent
									handleChange={formik.handleChange}
									values={formik.values}
									setFields={formik.setFieldValue}
								/>
								
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
						<Container className={formStyles.divCondition}>
							<Paper elevation={3}>
								<div id='divisor'>
									<div id='sub-divisor'>
										<InputLabel id='select-part'>Peça</InputLabel>
										<Select
											id='selected'
											labelId='parts'
											name='parts'
										>
											{products?.map((p) => {
												return (
													<MenuItem
														name='parts'
														value={`${p.part} ${p.model} ${p.color}`}
													>
														{p.part} {p.model} {p.color}
													</MenuItem>
												);
											})}
										</Select>
									</div>

									<div id='sub-divider'>
										<InputLabel htmlFor='qtd'>Valor</InputLabel>
										<TextField name='preco' />
									</div>
									<div id='sub-divider'>
										<InputLabel htmlFor='qtd'>Quantidade</InputLabel>
										<TextField name='qtd' />
									</div>
								</div>
								<div id='divisor'>
									<Button onClick={() => addPart()}>Cadastrar</Button>
								</div>
								<div id='divisor'>
									<TableContainer component={Paper}>
										<Table>
											<TableHead>
												<TableRow>
													<TableCell align='center'>
														<Typography>#</Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography>Peça</Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography>Quantidade</Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography>Preço</Typography>
													</TableCell>
												</TableRow>
											</TableHead>

											<TableBody>
												<TableRow>
													<TableCell align='center'>
														<Typography></Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography></Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography></Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography></Typography>
													</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</div>
							</Paper>
						</Container>
					</form>
				</div>
			</>
		);
	}
};

export default _new;
