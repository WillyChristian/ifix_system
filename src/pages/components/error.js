import React from "react";
import Menu from "./menu";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
	main: {
		color: "#000",
		background: "#fff",
		fontFamily: `-apple-system, BlinkMacSystemFont, Roboto,
			'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue',
			'Lucida Grande', sans-serif`,
		height: "100vh",
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	codeContainer: {
		margin: "0px",
	},
	error: {
		display: "inline-block",
		borderRight: " 1px solid rgba(0, 0, 0, 0.3)",
		margin: "0",
		marginRight: "20px",
		padding: " 10px 23px 10px 0",
		fontSize: "24px",
		fontWeight: "500",
		verticalAlign: "top",
	},
	textContainer: {
		display: "inline-block",
		textAlign: "left",
		lineHeight: "49px",
		height: "49px",
		verticalAlign: "middle",
	},
	text: {
		fontSize: "14px",
		fontWeight: "normal",
		lineHeight: "inherit",
		margin: "0",
		padding: "0",
	},
});

const ErrPage = () => {
	const errStyles = styles();

	return (
		<>
			<Menu />
			<div className={errStyles.main}>
				<div className={errStyles.codeContainer}>
					<h1 className={errStyles.error}>404</h1>
					<div className={errStyles.textContainer}>
						<h2 className={errStyles.text}>Page not Found</h2>
					</div>
				</div>
			</div>
		</>
	);
};
export default ErrPage;
