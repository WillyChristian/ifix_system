import React from "react";
import useSWR from "swr";
import { useSession } from "next-auth/client";
import {
	Button,
	makeStyles,
	TextField,
	Typography,
	Container,
	InputLabel,
} from "@material-ui/core";
import {useFormik} from 'formik'
import * as Yup from 'yup'


//components
import Menu from "../../components/menu";
import Error from "../../components/error";
import LoadPage from "../../components/error";
import Login from "../../login/index";

const fetcher = (url) => fetch(url).then((r) => r.json());

const _new = () => {
	// Verificar se o usuário esta logado
	const [session] = useSession();
	if (!session) return <Login />;
	if (session) {
		// Carrega todos os funcionários no BD
		const { data, error } = useSWR("../../api/employee/_read", fetcher);

		/* Pesquisa cliente por CPF */
		const searchById = async () => {
			const _id = document.querySelector("#cpf").value;
			axios
				.get(`../api/clients/${_id}`)
				.then((response) => {
					const data = response.data[0];
					setClient({ ...data });
				})
				.catch((err) => console.log(err));
		};
		if (error) return <Error />;
		if (!data) return <LoadPage />;

		// validação do fomr

		// const formik = useFormik({
		// 	initialValues:{
					
		// 	}
		// })

		return (
			<>
				<Menu />
				<div className='main'>
					<form action=''>
						<fieldset>
							<div className='cliente'>
								<legend>Dados do cliente</legend>
								<TextField type='text' placeholder='Nome' />
								<TextField type='text' placeholder='CPF' />
								<TextField type='text' placeholder='telefone' />
								<TextField type='text' placeholder='Celular' />
								<TextField type='text' placeholder='email' />
							</div>
							<div className='dispositivo'>
								<legend>Dados do equipamento</legend>
								<TextField type='text' placeholder='marca' />
								<TextField type='text' placeholder='modelo' />
								<TextField type='text' placeholder='cor' />
								<TextField type='text' placeholder='memória' />
								<TextField type='text' placeholder='serial' />
							</div>
							<div className='situation'>
								<legend>Condições gerais</legend>
								<label htmlFor='carcaca'>Estética</label>
								<TextField
									placeholder="Carcaça, Parafusos, manchas no LCD, etc."
									name='carcaca'
									id='carcaca'								
									multiline
									rows={5}
								></TextField>
								<InputLabel htmlFor='camera'>Câmeras</InputLabel>
								<TextField
									name='camera'
									id='camera'
									multiline
									rows={5}
								></TextField>
								<label htmlFor='microfone'>Microfones</label>
								<TextField
									name='microfone'
									id='microfone'
									cols='15'
									multiline
									rows={5}
									placeholder='Iphones tem 3, o da ligação, ao lado do carregador; da câmera frontal, ao lado da auricular e da câmera traseira, também ao lado da câmera'
								></TextField>
								<label htmlFor='rede'>Rede</label>
								<TextField
									name='rede'
									id='rede'
									multiline
									rows={5}
									placeholder='(WiFi, Operadora e Bluetooth)'
								></TextField>
								<label htmlFor='sound'>Som</label>
								<TextField
									name='sound'
									id='sound'
									multiline
									rows={5}
									placeholder='Auricular (onde você ouve durante a ligação) e a caixa de som'
								></TextField>
							</div>
							<div className="tecnico">
								<fieldset>Descrição do Problema</fieldset>
								<textarea name="probDescription" id="probDescription" cols="30" rows="10" placeholder="Seja sussinto e objetivo focando nos defeitos relatados"></textarea>
							</div>
							<div className="prazo">
								<label htmlFor="in">Data e hora de Enstrada</label>
								<TextField type="datetime-local"/>
								<label htmlFor="in">Data e hora de entrega</label>
								<TextField type="datetime-local"/>
							</div>


						</fieldset>
					</form>
				</div>
			</>
		);
	}
};

export default _new;
