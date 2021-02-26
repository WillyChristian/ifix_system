import React from "react";
import Link from "next/link";
import { makeStyles, Button, Typography } from "@material-ui/core";
import { signIn, signOut, useSession } from "next-auth/client";

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
	login: {
		float: "right",
		display:"flex",
		width: "200px",
		justifyContent: 'space-around',
		alignItems: "center",
		
	},
});
const Menu = () => {
	const menuStyles = style();
	const [session, loading] = useSession();

	return (
		<div className={menuStyles.menu}>
			<ul className={menuStyles.ul}>
				<Link href='/'>
					<a className={menuStyles.a}> HOME </a>
				</Link>
				<Link href='/authorize/service/_new'>
					<a className={menuStyles.a}> Cadastrar OS </a>
				</Link>
				<Link href='/authorize/service/_list'>
					<a className={menuStyles.a}> Consulta OS</a>
				</Link>
				<Link href='/authorize/client/_new'>
					<a className={menuStyles.a}> Cadastrar Cliente </a>
				</Link>
				<Link href='/authorize/client/_list'>
					<a className={menuStyles.a}> Consultar Cliente </a>
				</Link>
			</ul>
			<div className={menuStyles.login}>
				{session && (
					<>
					
						<span>
							<Typography variant='body1'>
								{session.user.name}
							</Typography>
						</span>
				
						<Button
							variant='outlined'
							color='danger'
							onClick={() => signOut()}
						>
							Sair
						</Button>
					</>
				)}
				{!session && (
					<Button
						size='small'
						variant='outlined'
						color='primary'
						onClick={() =>
							signIn("auth0", { callbackUrl: "/authorize/home" })
						}
					>
						Logar
					</Button>
				)}
			</div>
		</div>
	);
};
export default Menu;
