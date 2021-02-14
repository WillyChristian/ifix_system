import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { makeStyles, TextField, InputLabel, Select, MenuItem} from "@material-ui/core";

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
				<div className="página">
					<div className="container-1">
						<div className="dados-cliente">
							<TextField label="ID" id="_id"/>					
							<TextField label="Nome" id="full_name"/>					
							<TextField label="CPF" id="cpf"/>					
							<TextField label="Celular" id="phone"/>					
						</div>
						<div className="text-container">
							<TextField multiline label="Problema Reportado" id="device_issue"/>	
						</div>
					</div>

					<div className="container-2">
						<div className="items-usados">
							<div>
								<InputLabel id="produtos">Peças</InputLabel>
								<Select labelId="_pecas">
									{ 
										pecas.map( elemento =>{
											<MenuItem value={key} >{elemento.peca_name}</MenuItem>
										} )
									}
								</Select>				
								<InputLabel id="_tec">Técnico</InputLabel>
								<Select labelId="_tec">
									{ 
										tecnico.map( elemento =>{
											<MenuItem value={key} >{elemento.tecnico_name}</MenuItem>
										} )
									}
								</Select>				
								<InputLabel label="Atendente" id="_seller">Atendente</InputLabel>
								<Select labelId="_tec">
									{ 
										tecnico.map( elemento =>{
											<MenuItem value={key} >{elemento.tecnico_name}</MenuItem>
										} )
									}
								</Select>
							</div>
							<div>
								<TextField multiline label="Resoluão"/>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default _new;
