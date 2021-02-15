import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core";

// pages
// import Clientes from "../client/_new";
// import Listar from "../client/_list";

//Estilos
const style = makeStyles({
	menu: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		height: "70px",
		backgroundColor: "#9a9a9a",
	},
	ul: {
		display: "flex",
		listStyleType: "none",
	},
	a: {
		margin: "0px 0.5rem",
		listStyle: "none",
		color: "#000",
	},
});
const Menu = () => {
	const menuStyles = style();
	return (
		<div className={menuStyles.menu}>
			<ul className={menuStyles.ul}>
				<Link href='/service/_list'>
					<a className={menuStyles.a}>Consultar Ordens de Serviço</a>
				</Link>
				<Link href='/service/_new'>
					<a className={menuStyles.a}>Abrir Ordens de Serviço</a>
				</Link>
				<Link href='/client/_new'>
					<a className={menuStyles.a}>Cadastrar Clientes</a>
				</Link>
				<Link href='/client/_list'>
					<a className={menuStyles.a}>LIstar Cliente</a>
				</Link>
				<Link href='#'>
					<a className={menuStyles.a}>Administrativo</a>
				</Link>
				<Link href='#'>
					<a className={menuStyles.a}>Vendas</a>
				</Link>
			</ul>
		</div>
	);
};
export default Menu;
