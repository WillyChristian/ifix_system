import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { makeStyles, TextField } from "@material-ui/core";

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
			<form className={classes.root} noValidate autoComplete='on'>
				<div>
					<TextField
						id='outlined-required'
						label='ID'
						defaultValue='Teste'
						variant='outlined'
						InputProps={{
							readOnly: true,
						}}
					/>
					<TextField
						id='outlined-disabled'
						label='Nome'
						variant='outlined'
					/>
					<TextField
						id='outlined-password-input'
						label='CPF'
						autoComplete='current-password'
						label='Read Only'
						variant='outlined'
					/>
					<TextField
						id='outlined-read-only-input'
						label='Read Only'
						InputProps={{
							readOnly: true,
						}}
						variant='outlined'
					/>
					<TextField
						id='outlined-number'
						label='Number'
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
						variant='outlined'
					/>
					<TextField
						id='outlined-search'
						label='Técnico'
						type='search'
						variant='outlined'
					/>
					<TextField
						id='outlined-helperText'
						label='Helper text'
						helperText='Some important text'
						variant='outlined'
					/>
				</div>
			</form>
		</>
	);
};

export default _new;
