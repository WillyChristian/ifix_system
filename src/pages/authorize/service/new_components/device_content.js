import React from "react";
import { TextField, Typography, makeStyles } from "@material-ui/core";

const styles = makeStyles({
	divisor: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "center",
		"& .MuiTextField-root": {
			margin: "1rem",
			width: "50%",
		},
	},
});

function DeviceContent({ ...props }) {
	const { handleChange, values } = props;
	const formStyles = styles();
	return (
		<div>
			<legend>
				<Typography variant={"h5"}>Dados do equipamento</Typography>
			</legend>
			<div className={formStyles.divisor}>
				<TextField
					type='text'
					placeholder='Marca'
					name='brand'
					onChange={handleChange}
					value={values.brand}
				/>
				<TextField
					type='text'
					placeholder='Modelo'
					name='model'
					onChange={handleChange}
					value={values.model}
				/>
			</div>
			<div className={formStyles.divisor}>
				<TextField
					type='text'
					placeholder='Cor'
					name='color'
					onChange={handleChange}
					value={values.color}
				/>
				<TextField
					type='text'
					placeholder='Memória'
					name='capacity'
					onChange={handleChange}
					value={values.capacity}
				/>
				<TextField
					type='text'
					placeholder='Número de Série'
					name='sn'
					onChange={handleChange}
					value={values.sn}
				/>
			</div>
		</div>
	);
}

export default DeviceContent;
