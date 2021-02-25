import { useContext, useState } from "react";
import {
	Container,
	Button,
	Grid,
	TextField,
	Typography,
	makeStyles,
} from "@material-ui/core";

//Componentes
import employeeContext from "./components/empContext/context";

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

const Login = () => {
	const [user, setUser] = useState({
		name: "",
		pass: "",
	});
	const employee = useContext(employeeContext);
	const style = Styles();

	const authLogin = () => {
		employee.setLogged(user);
	};

	const handleUserChange = (event) => {
		const { id, value } = event.target;
		const obj = { id: value };
	};

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
									id='name'
									onChange={handleUserChange}
								/>
							</Grid>
							<Grid item>
								<TextField
									label='Password'
									variant='filled'
									id='pass'
									onChange={handleUserChange}
								/>
							</Grid>
							<Grid item>
								<Button variant='outlined' onClick={authLogin}>
									Logar
								</Button>
							</Grid>
						</Grid>
					</fieldset>
				</form>
			</Container>
			<Typography color='error'>{employee.logged}</Typography>
		</>
	);
};

export default Login;
