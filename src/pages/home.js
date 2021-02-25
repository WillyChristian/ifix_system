import { makeStyles } from "@material-ui/core";

//Componentes
import Menu from "./components/menu";

//Estilos
const style = makeStyles({
	main: {
		height: "100vh",
		overflow: "hidden",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});

const Home = () => {
	return (
		<>
			<Menu></Menu>
		</>
	);
};

export default Home;
