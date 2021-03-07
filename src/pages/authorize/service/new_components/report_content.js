import React, { useContext } from "react";
import {
	TextField,
	Typography,
	InputLabel,
	makeStyles,
	Select,
	MenuItem,
} from "@material-ui/core";
import { EmployeesContext } from "../../../components/context/employees";

const styles = makeStyles({
	divisor: {
		display: "felx",
		flexDirection: "column",
		margin: "1rem",
	},
});

function ReportContent({ ...props }) {
	const { handleChange, values, setFields } = props;
	const formStyles = styles();
	const att = useContext(EmployeesContext);

	return (
		<>
			<legend>
				<Typography variant={"h5"}>Descrição do Problema</Typography>
			</legend>
			<div className={formStyles.divisor}>
				<TextField
					name='prob_descrpt'
					fullWidth
					multiline
					rows={5}
					variant='outlined'
					placeholder='Descrição sussinta e objetiva do problema'
					onChange={handleChange}
					value={values.prob_descrpt}
				/>
				<div className={formStyles.divisor	}>
					<InputLabel htmlFor='attendant'>
						Atentendente Responsável
					</InputLabel>
					<Select
						labelId="attendant"
						id="select"
					>
						<MenuItem value={att.att.name}>{att.att.name}</MenuItem>
					</Select>
				</div>
			</div>
		</>
	);
}

export default ReportContent;
