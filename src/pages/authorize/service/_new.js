import React, { useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/client";
import {
	makeStyles,
	TextField,
	Typography,
	Container,
	InputLabel,
	Paper,
	Divider,
  Button,
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
import ResolutionContent from "./new_components/resolution_content";
import PartsContent from "./new_components/parts/index";
import { values } from "lodash";

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
	const { data: products } = useSWR("../../api/products/read", getProducts); //Lista os produtos do BD
	const { data: employee } = useSWR("../../api/employee/_read", fetcher); // Lista os funcionários bo BD
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
			prob_descrpt: "",
      parts:[],
		},
		onSubmit:(values) => {
			//Salva os dados no banco
      alert(JSON.stringify(values, null, 2))
		},
		validationSchema: Yup.object({
			//Validação dos campos preenchidos
		}),
	});

	//Verifica se há uma sessão ativa e rotona à página login caso não haja
	if (!session) return <Login />;
	if (session) {
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
						<Container className={formStyles.div}>
							<Paper elevation={3}>
								<ResolutionContent
									handleChange={formik.handleChange}
									values={formik.values}
									setFields={formik.setFieldValue}
								/>
							</Paper>
						</Container>
						<Container className={formStyles.div}>
							<Paper elevation={3}>
								<PartsContent
									prod={products}
                  part={parts}
									update={setParts}
									handleChange={formik.handleChange}
									values={formik.values}
									setFields={formik.setFieldValue}
								/>
							</Paper>
						</Container>
            <Container>
              <Button type="submit">Enviar</Button>
            </Container>
					</form>
				</div>
			</>
		);
	}
};

export default _new;
