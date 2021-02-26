import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSession } from "next-auth/client";


//components
import Login from '../../login/index'
import Menu from "../../components/menu";


const styles = makeStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		height: "80vh",
		width: "100%",
		justifyConetnt: "center",
		alignItemns: "center",
		backgroundColor: "#f4f4f4",
	},
});


const Home = () => {
	const thisStyle = styles();
	const [session] = useSession()

	if(!session) return <Login />
	if(session){
		return (
			<>
				<Menu />
				<div className={thisStyle.container}>
					<h1>Bem vindo </h1>
				</div>
			</>
		);
	}
};
export default Home;
