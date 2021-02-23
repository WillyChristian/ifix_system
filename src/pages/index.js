import { useContext } from "react";
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
	const employee = useContext(employeeContext);
	const style = Styles();

	const authLogin = () => {
		const tec = employee.emp[0];
		console.log(tec.name);
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
									name='username'
								/>
							</Grid>
							<Grid item>
								<TextField
									label='Password'
									variant='filled'
									name='pass'
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
				<Typography color='error'>Oi</Typography>
			</Container>
		</>
	);
};

export default Login;
