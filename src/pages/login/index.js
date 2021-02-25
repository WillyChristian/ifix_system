import Menu from "../components/menu";
import { Container, makeStyles } from "@material-ui/core";

const style = makeStyles({
	login: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "80vh",
	},
});
const Login = () => {
	const thisStyle = style();
	return (
		<>
			<Menu />
			<Container>
				<div className={thisStyle.login}>
					<h1>É preciso fazer login para acessar o sistema</h1>
				</div>
			</Container>
		</>
	);
};

export default Login;
