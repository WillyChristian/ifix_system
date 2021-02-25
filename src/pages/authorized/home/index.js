import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Menu from "../../components/menu";

const styles = makeStyles({
	display: "flex",
	flexDirection: "column",
	height: "80vh",
	width: "100%",
	justifyConetnt: "center",
	alignItemns: "center",
	backgroundColor: "#f4f4f4",
});

function Home() {
	const thisStyle = styles();
	return (
		<div>
			<Menu />
			<div className={thisStyle.container}>
				<h1>Aqui é a home</h1>
				<h4>Aqui vão dados da tela inicial</h4>
				<p>
					nesta tela deverá haver dados estatísticos para auxiliar no
					dia-a-dia
				</p>
			</div>
		</div>
	);
}
export default Home;
