import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { makeStyles, TextField, Select, InputLabel, MenuItem } from "@material-ui/core";

//components
import Menu from "../components/menu";
import Err from "../components/error";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
			padding: "2em",
		},
	},
}));

const _new = () => {
	const router = useRouter();
	const { data, error } = useSWR(`../api/clients/${router.query.id}`);
	const classes = useStyles();
	return (
		<>
			<Menu />
				<div>
					<div className="container-1">
						<div className="problem">
							<TextFiel />
						</div>
						<div className="problem-textArea">

						</div>
					</div>
					<div className="container-2">
						<div className="resolution">

						</div>
						<div className="resolution-textArea">
							
						</div>
					</div>
				</div>
		</>
	);
};

export default _new;
