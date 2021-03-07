import React from "react";
import { TextField, Typography,InputLabel, makeStyles } from "@material-ui/core";

const styles = makeStyles({
	divisor: {
		margin: ".5rem",
		display: "flex",
		justifyContent: "space-around",
		"& #sub-divisor": {
			display: "flex",
			flexDirection: "column",
			"$ .MuiTextField-root": {
				width: "50%",
			},
		},
	},
});

function ConditionsContent({ ...props }) {
	const { handleChange, values } = props;
	const formStyles = styles();
	return (
		<div>
			<legend>
				<Typography variant={"h5"}>Condições gerais</Typography>
			</legend>
			<div className={formStyles.divisor}>
				<div id='sub-divisor'>
					<InputLabel htmlFor='outside'>Exerior</InputLabel>
					<TextField
						variant='outlined'
						placeholder='Carcaça, Parafusos, LCD, Touch, etc.'
						name='outside'
						id='outside'
						multiline
						rows={5}
                        onChange={handleChange}
                        value={values.outside}
					/>
				</div>
				<div id='sub-divisor'>
					<InputLabel htmlFor='camera'>Câmeras</InputLabel>
					<TextField
						placeholder='Manchas, foco, distorções na imagem (borrões ou esbranquiçado)'
						variant='outlined'
						name='camera'
						id='camera'
						multiline
						fullWidth
						rows={5}
                        onChange={handleChange}
                        value={values.camera}
					/>
				</div>
				<div id='sub-divisor'>
					<InputLabel htmlFor='sound'>Som</InputLabel>
					<TextField
						variant='outlined'
						name='sound'
						id='sound'
						multiline
						rows={5}
						placeholder='Auricular (onde você ouve durante a ligação) e a caixa de som'
                        onChange={handleChange}
                        value={values.sound}
					/>
				</div>
			</div>
			<div className={formStyles.divisor}>
				<div id='sub-divisor'>
					<InputLabel htmlFor='microfone'>Microfones</InputLabel>
					<TextField
						variant='outlined'
						name='microfone'
						id='microfone'
						cols='15'
						multiline
						rows={5}
						placeholder='Câmeras (vídeo), ligação, gravador de voz'
                        onChange={handleChange}
                        value={values.microphone}
					/>
				</div>
				<div id='sub-divisor'>
					<InputLabel htmlFor='network'>Rede</InputLabel>
					<TextField
						variant='outlined'
						name='network'
						id='network'
						multiline
						rows={5}
						placeholder='WiFi, Operadora e Bluetooth'
                        onChange={handleChange}
                        value={values.brand}
					/>
				</div>
				<div id='sub-divisor'>
					<InputLabel htmlFor='other'>Sensores e outros</InputLabel>
					<TextField
						variant='outlined'
						name='other'
						id='other'
						multiline
						rows={5}
						placeholder='Luminosidade, brilho automático ou outro detalhe que possa ser mencionado'
                        onChange={handleChange}
                        value={values.other}
					/>
				</div>
			</div>
		</div>
	);
}

export default ConditionsContent;
