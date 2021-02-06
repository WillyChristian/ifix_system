import { useState } from "react";
import {
	Container,
	Button,
	Grid,
	TextField,
	Typography,
	makeStyles,
} from "@material-ui/core";
import { connectToDatabase } from "../util/mongodb";

//Componentes
import Home from "./home";

//Estilos
const Styles = makeStyles({
	container: {
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		margin: "0px",
		background: "#424242",
	},
	fieldset: {
		padding: "1.5rem",
		backgroundColor: "#949494",
	},
});

const Login = ({ funcionarios }) => {
	//Estados para verificação e validação de login
	const [user, setUser] = useState({
		isLogged: false,
		username: "",
		pass: "",
		status: false,
	});

	// Constante dos estilos
	const style = Styles();

	// função para inserir o valor digitado nos estados
	const insertCredentials = (event) => {
		const value = event.target.value;
		const key = event.target.name;
		setUser((old) => ({
			...old,
			[key]: value,
		}));
	};

	// Função para recuperar os dados no Mongo e confrontar
	// com os dados digitados
	const loginAuth = () => {
		const list_func = JSON.parse(funcionarios);
		let userLogged;
		list_func.map((e) => {
			if (e.nome === user.username) {
				if (e.pass === user.pass) {
					userLogged = e;
				}
			}
		});
		!userLogged
			? setUser({ status: true })
			: setUser({ username: userLogged, isLogged: true });
	};

	//Validação e redirecionamento para caso os dados sejam validos
	//Futuramente deverá ser adicionado um método para
	//configurar uma session no navegador, incluindo tempo de
	//cooldown
	if (user.isLogged) return <Home user={user.username} />;
	if (!user.isLogged) {
		//Formulário
		return (
			<>
				<Container classes={{ root: style.container }}>
					<form>
						<fieldset className={style.fieldset}>
							<legend></legend>
							<Grid
								container
								spacing={2}
								alignItems='center'
								justify='center'
							>
								<Grid item>
									<TextField
										label='Username'
										variant='filled'
										onChange={insertCredentials}
										name='username'
									/>
								</Grid>
								<Grid item>
									<TextField
										label='Password'
										variant='filled'
										onChange={insertCredentials}
										name='pass'
									/>
								</Grid>
								<Grid item>
									<Button variant='outlined' onClick={loginAuth}>
										Logar
									</Button>
								</Grid>
							</Grid>
						</fieldset>
					</form>
					<Typography color='error'>
						{user.status === true ? "Usuario ou senha invalidos." : ""}
					</Typography>
				</Container>
			</>
		);
	}
};

// Método para fazer o server-side e trazer os dados do banco
// e encaminhar para o componente via props
export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();

	const temp_func = await db.collection("funcionarios").find({}).toArray();
	const funcionarios = JSON.stringify(temp_func);
	return {
		props: { funcionarios },
	};
}

export default Login;
