import React, { useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/client";
import {
  MenuItem,
  makeStyles,
  TextField,
  Typography,
  Container,
  InputLabel,
  Paper,
  Divider,
  Select,
  Button,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHead,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

//Componentes
import Menu from "../../components/menu";
import Error from "../../components/error";
import LoadPage from "../../components/error";
import Login from "../../login/index";
import ClientContent from "./new_components/client_content";
import DeviceContent from "./new_components/device_content";
import ConditionsContent from "./new_components/condition_content";
import ReportContent from "./new_components/report_content";

// Função para trazer os dados do BD
const fetcher = (url) => fetch(url).then((r) => r.json());
const getProducts = (url) => fetch(url).then((r) => r.json());

// Função para gerar os estilos
const styles = makeStyles({
<<<<<<< HEAD
	main: {
		width: "100%",
		height: "250vh",
	},
	div: {
		padding: "1rem",
		display: "flex",
		justifyContent: "center",
		"& .MuiPaper-root": {
			width: "70%",
			padding: "1rem",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
		},
	},
	divDeadline: {
		padding: "1rem",
		display: "flex",
		justifyContent: "center",
		"& .MuiPaper-root": {
			padding: "1rem",
			width: "70%",
			display: "flex",
			flexDirection: "column",
			"& #divisor": {
				width: "100%",
				display: "flex",
				"& > div": {
					margin: "1rem",
				},
			},
		},
	},
=======
  main: {
    width: "100%",
    height: "250vh",
  },
  divClient: {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    "& .MuiPaper-root": {
      width: "70%",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "& #divisor": {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        "& .MuiTextField-root": {
          margin: "1rem",
          width: "50%",
        },
      },
    },
  },
  divDevice: {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    "& .MuiPaper-root": {
      width: "70%",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "& #divisor": {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        "& .MuiTextField-root": {
          margin: "1rem",
          width: "50%",
        },
      },
    },
  },
  divCondition: {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    "& .MuiPaper-root": {
      display: "flex",
      flexDirection: "column",
      padding: "1rem",
      width: "70%",
      "& #divisor": {
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
    },
  },
  divReport: {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    "& .MuiPaper-root": {
      padding: "1rem",
      width: "70%",
      display: "flex",
      flexDirection: "column",
      "& #sub-divisor": {
        display: "felx",
        flexDirection: "column",
        margin: "1rem",
      },
    },
  },
  divDeadline: {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    "& .MuiPaper-root": {
      padding: "1rem",
      width: "70%",
      display: "flex",
      flexDirection: "column",
      "& #divisor": {
        width: "100%",
        display: "flex",
        "& > div": {
          margin: "1rem",
        },
      },
    },
  },
>>>>>>> a2fe6ed7cfbbcc9ecda714b6fdc1852ac07bef42
});

const _new = () => {
  // Verificar se o usuário esta logado
  const [session] = useSession();
  const { data: products } = useSWR("../../api/products/read", getProducts);
  const [parts, setParts] = useState([
    {
      qtd: "",
      peca: "",
      price: "",
    },
  ]);

  // Variável de estilo
  const formStyles = styles();

<<<<<<< HEAD
	//Validação do Formulário
	const formik = useFormik({
		initialValues: {
			name: "",
			cpf: "",
			email: "",
			phone_home: "",
			cellphone: "",
			brand: "",
			model: "",
			color: "",
			capacity: "",
			sn: "",
			outside: "",
			camera: "",
			sound: "",
			microfone: "",
			network: "",
			prob_descrpt: ""
		},
		onSubmit: {
			//Salva os dados no banco
		},
		validationSchema: Yup.object({
			//Validação dos campos preenchidos
		}),
	});
=======
  //Validação do Formulário
  const formik = useFormik({
    initialValues: {
      so_num: "",
      status: "",
      store: "",
      client: {
        client_id: " ",
        name: " ",
        cpf: "",
        email: " ",
        phone_home: " ",
        cellphone: " ",
        contact_phone: " ",
      },
      device: {
        brand: "",
        model: "",
        color: "",
        capacity: "",
        sn: "",
        outside: "",
        camera: "",
        sound: "",
        microphone: "",
        network: "",
        other: "",
      },
      attendant: {
        att_id: "",
        att_name: "",
        att_store: "",
      },
      tecnician: {
        tec_id: "",
        tec_name: "",
        tec_store: "",
      },
      in: {
        date_in: "",
        prob_description: "",
        att_responsible: "",
      },
      out: {
        date_out: "",
        prob_solution: "",
        tec_responsible: "",
      },
      parts_list: "",
      price: "",
      qtd: "",
    },
    onSubmit: async (values) => {
      //Salva os dados no banco
      alert(values);
    },
    validationSchema: Yup.object({
      //Validação dos campos preenchidos
    }),
  });
>>>>>>> a2fe6ed7cfbbcc9ecda714b6fdc1852ac07bef42

  // Carrega todos os funcionários no BD
  const { data: employee, error } = useSWR("../../api/employee/_read", fetcher);

<<<<<<< HEAD
	//Verifica se há uma sessão ativa e rotona à página login caso não haja
	if (!session) return <Login />;
	if (session) {
		//Caso haja erro ao carregar os dados do banco redireciona à uma página de erro
		if (error) return <Error />;
		if (!employee) return <LoadPage />;

		return (
			<>
				<Menu />
				<div className={formStyles.main}>
					<form action={formik.handleSubmit}>
						<Container className={formStyles.div}>
							<Paper elevation={3}>
								<ClientContent
									handleChange={formik.handleChange}
									values={formik.values}
								/>
							</Paper>
						</Container>

						<Container className={formStyles.div}>
							<Paper elevation={3}>
								<DeviceContent
									handleChange={formik.handleChange}
									values={formik.values}
								/>
							</Paper>
						</Container>

						<Container className={formStyles.div}>
							<Paper elevation={3}>
								<ConditionsContent
									handleChange={formik.handleChange}
									values={formik.values}
								/>
							</Paper>
						</Container>

						<Container className={formStyles.div}>
							<Paper elevation={3}>
								<ReportContent
									handleChange={formik.handleChange}
									values={formik.values}
									setFields={formik.setFieldValue}
								/>
								
							</Paper>
						</Container>

						<Container className={formStyles.divDeadline}>
							<Paper elevation={3}>
								<legend>
									<Typography variant={"h5"}>Prazo</Typography>
								</legend>
								<div id='divisor'>
									<div>
										<InputLabel htmlFor='in'>
											Data e hora de Enstrada
										</InputLabel>
										<TextField type='datetime-local' />
									</div>
									<div>
										<InputLabel htmlFor='in'>
											Data e hora de entrega
										</InputLabel>
										<TextField type='datetime-local' />
									</div>
								</div>
							</Paper>
						</Container>
						<Divider />
						<Typography variant={"h4"}>Parte Técnica</Typography>
						<Divider />
						<Container className={formStyles.divReport}>
							<Paper elevation={3}>
								<legend>
									<Typography variant={"h5"}>
										Resolução do problema
									</Typography>
								</legend>
								<div id='sub-divisor'>
									<TextField
										name='solution'
										fullWidth
										multiline
										rows={5}
										variant='outlined'
										placeholder='Descrição sussinta e objetiva do que foi feito'
									/>
									<div className='tec-responsible'>
										<InputLabel htmlFor='tec-list'>
											Técnico Responsável
										</InputLabel>
										<select id='tec-list'>
											<option value='willy'>Willy</option>
											<option value='orlando'>Orlando</option>
											<option value='bob'>Bob</option>
										</select>
									</div>
								</div>
							</Paper>
						</Container>
						<Container className={formStyles.divCondition}>
							<Paper elevation={3}>
								<div id='divisor'>
									<div id='sub-divisor'>
										<InputLabel id='select-part'>Peça</InputLabel>
										<Select
											id='selected'
											labelId='parts'
											name='parts'
										>
											{products?.map((p) => {
												return (
													<MenuItem
														name='parts'
														value={`${p.part} ${p.model} ${p.color}`}
													>
														{p.part} {p.model} {p.color}
													</MenuItem>
												);
											})}
										</Select>
									</div>

									<div id='sub-divider'>
										<InputLabel htmlFor='qtd'>Valor</InputLabel>
										<TextField name='preco' />
									</div>
									<div id='sub-divider'>
										<InputLabel htmlFor='qtd'>Quantidade</InputLabel>
										<TextField name='qtd' />
									</div>
								</div>
								<div id='divisor'>
									<Button onClick={() => addPart()}>Cadastrar</Button>
								</div>
								<div id='divisor'>
									<TableContainer component={Paper}>
										<Table>
											<TableHead>
												<TableRow>
													<TableCell align='center'>
														<Typography>#</Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography>Peça</Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography>Quantidade</Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography>Preço</Typography>
													</TableCell>
												</TableRow>
											</TableHead>

											<TableBody>
												<TableRow>
													<TableCell align='center'>
														<Typography></Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography></Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography></Typography>
													</TableCell>
													<TableCell align='center'>
														<Typography></Typography>
													</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</div>
							</Paper>
						</Container>
					</form>
				</div>
			</>
		);
	}
=======
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

  const handleChangeSelect = (event) => {
    const value = event.target.value;
    if (event.target.name === "parts") {
      setParts({
        ...parts,
        peca: value,
      });
    }
    if (event.target.name === "qtd") {
      setParts({
        ...parts,
        qtd: value,
      });
    }
    if (event.target.name === "price") {
      setParts({
        ...parts,
        price: value,
      });
    }
  };

  //Verifica se há uma sessão ativa e rotona à página login caso não haja
  if (!session) return <Login />;
  if (session) {
    //Caso haja erro ao carregar os dados do banco redireciona à uma página de erro
    if (error) return <LoadPage />;
    if (!employee) return <LoadPage />;

    return (
      <>
        <Menu />
        <div className={formStyles.main}>
          <form action={formik.handleSubmit}>
            <Container className={formStyles.divClient}>
              <Paper className={formStyles.divClient} elevation={3}>
                <legend>
                  <Typography variant={"h5"}>Dados do cliente</Typography>
                </legend>
                <div id="divisor">
                  <TextField
                    id="name"
                    label="Nome Completo"
                    type="text"
                    variant="outlined"
                    value={formik.values.client.name}
                    fullWidth
                    onChange={formik.handleChange}
                    /*helperText={formik.errors.full_name}
								error={formik.errors.full_name}*/
                  />
                  <TextField
                    onChange={formik.handleChange}
                    value={formik.values.client.cpf}
                    type="text"
                    placeholder="CPF"
                    name="cpf"
                  />
                  <TextField
                    onChange={formik.handleChange}
                    value={formik.values.client.email}
                    type="text"
                    placeholder="E-mail"
                    name="email"
                  />
                </div>
                <div id="divisor">
                  <TextField
                    onChange={formik.handleChange}
                    value={formik.values.client.phone_home}
                    name="phone_home"
                    type="text"
                    placeholder="Telefone Residencial"
                  />
                  <TextField
                    onChange={formik.handleChange}
                    value={formik.values.client.cellphone}
                    type="text"
                    placeholder="Celular"
                  />
                  <TextField
                    onChange={formik.handleChange}
                    value={formik.values.client.contact_phone}
                    name="contact_phone"
                    type="text"
                    placeholder="Telefone Residencial"
                  />
                </div>
              </Paper>
            </Container>

            <Container className={formStyles.divDevice}>
              <Paper elevation={3}>
                <legend>
                  <Typography variant={"h5"}>Dados do equipamento</Typography>
                </legend>
                <div id="divisor">
                  <TextField type="text" placeholder="marca" name="brand" />
                  <TextField type="text" placeholder="modelo" name="model" />
                </div>
                <div id="divisor">
                  <TextField type="text" placeholder="cor" name="color" />
                  <TextField
                    type="text"
                    placeholder="memória"
                    name="capacity"
                  />
                  <TextField
                    type="text"
                    placeholder="Número de Série"
                    name="sn"
                  />
                </div>
              </Paper>
            </Container>

            <Container className={formStyles.divCondition}>
              <Paper elevation={3}>
                <legend>
                  <Typography variant={"h5"}>Condições gerais</Typography>
                </legend>
                <div id="divisor">
                  <div id="sub-divisor">
                    <InputLabel htmlFor="outside">Exerior</InputLabel>
                    <TextField
                      variant="outlined"
                      placeholder="Carcaça, Parafusos, LCD, Touch, etc."
                      name="outside"
                      id="outside"
                      multiline
                      rows={5}
                    />
                  </div>
                  <div id="sub-divisor">
                    <InputLabel htmlFor="camera">Câmeras</InputLabel>
                    <TextField
                      placeholder="Manchas, foco, distorções na imagem (borrões ou esbranquiçado)"
                      variant="outlined"
                      name="camera"
                      id="camera"
                      multiline
                      fullWidth
                      rows={5}
                    />
                  </div>
                  <div id="sub-divisor">
                    <InputLabel htmlFor="sound">Som</InputLabel>
                    <TextField
                      variant="outlined"
                      name="sound"
                      id="sound"
                      multiline
                      rows={5}
                      placeholder="Auricular (onde você ouve durante a ligação) e a caixa de som"
                    />
                  </div>
                </div>
                <div id="divisor">
                  <div id="sub-divisor">
                    <InputLabel htmlFor="microphone">Microfones</InputLabel>
                    <TextField
                      variant="outlined"
                      name="microphone"
                      id="microphone"
                      cols="15"
                      multiline
                      rows={5}
                      placeholder="Câmeras (vídeo), ligação, gravador de voz"
                    />
                  </div>
                  <div id="sub-divisor">
                    <InputLabel htmlFor="network">Rede</InputLabel>
                    <TextField
                      variant="outlined"
                      name="network"
                      id="network"
                      multiline
                      rows={5}
                      placeholder="WiFi, Operadora e Bluetooth"
                    />
                  </div>
                  <div id="sub-divisor">
                    <InputLabel htmlFor="other">Sensores e outros</InputLabel>
                    <TextField
                      variant="outlined"
                      name="other"
                      id="other"
                      multiline
                      rows={5}
                      placeholder="Luminosidade, brilho automático ou outro detalhe que possa ser mencionado"
                    />
                  </div>
                </div>
              </Paper>
            </Container>

            <Container className={formStyles.divReport}>
              <Paper elevation={3}>
                <legend>
                  <Typography variant={"h5"}>Descrição do Problema</Typography>
                </legend>
                <div id="sub-divisor">
                  <TextField
                    name="prob_description"
                    fullWidth
                    multiline
                    rows={5}
                    variant="outlined"
                    placeholder="Descrição sussinta e objetiva do problema"
                  />
                  <div className="att-responsible">
                    <InputLabel htmlFor="att-list">
                      Atentendente Responsável
                    </InputLabel>
                    <select name="att_responsible" id="att-list">
                      <option value="Milena">Milena</option>
                      <option value="Helen">Helen</option>
                      <option value="Evelyn">Evelyn</option>
                    </select>
                  </div>
                </div>
              </Paper>
            </Container>

            <Container className={formStyles.divDeadline}>
              <Paper elevation={3}>
                <legend>
                  <Typography variant={"h5"}>Prazo</Typography>
                </legend>
                <div id="divisor">
                  <div>
                    <InputLabel htmlFor="date_in">
                      Data e hora de Enstrada
                    </InputLabel>
                    <TextField name="date_in" type="datetime-local" />
                  </div>
                  <div>
                    <InputLabel htmlFor="date_out">
                      Data e hora de entrega
                    </InputLabel>
                    <TextField name="date_out" type="datetime-local" />
                  </div>
                </div>
              </Paper>
            </Container>

            <Divider />
            <Typography variant={"h4"}>Parte Técnica</Typography>
            <Divider />

            <Container className={formStyles.divReport}>
              <Paper elevation={3}>
                <legend>
                  <Typography variant={"h5"}>Resolução do problema</Typography>
                </legend>
                <div id="sub-divisor">
                  <TextField
                    name="prob_solution"
                    fullWidth
                    multiline
                    rows={5}
                    variant="outlined"
                    placeholder="Descrição sussinta e objetiva do que foi feito"
                  />
                  <div className="tec-responsible">
                    <InputLabel htmlFor="tec_responsible">
                      Técnico Responsável
                    </InputLabel>
                    <select id="tec_responsible">
                      <option value="willy">Willy</option>
                      <option value="orlando">Orlando</option>
                      <option value="bob">Bob</option>
                    </select>
                  </div>
                </div>
              </Paper>
            </Container>

            <Container className={formStyles.divCondition}>
              <Paper elevation={3}>
                <div id="divisor">
                  <div id="sub-divisor">
                    <InputLabel id="select-part">Selecione a peça</InputLabel>
                    <Select
                      id="selected"
                      // onChange={handleChangeSelect}
                      labelId="select-part"
                      name="parts_list"
                    >
                      {products?.map((p) => {
                        return (
                          <MenuItem
                            name="parts_list"
                            value={`${p.part} ${p.model} ${p.color}`}
                          >
                            {p.part} {p.model} {p.color}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </div>

                  <div id="sub-divider">
                    <InputLabel htmlFor="price">Valor</InputLabel>
                    <TextField onChange={handleChangeSelect} name="price" />
                  </div>
                  <div id="sub-divider">
                    <InputLabel htmlFor="qtd">Quantidade</InputLabel>
                    <TextField onChange={handleChangeSelect} name="qtd" />
                  </div>
                </div>
                <div id="divisor">
                  <Button /*onClick={() => addPart()}*/>Cadastrar</Button>
                </div>
                <div id="divisor">
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">
                            <Typography>#</Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography>Peça</Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography>Quantidade</Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography>Preço (unitário)</Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {/* {parts?.map((r, key) => {
													return ( */}
                        <p>oi </p>
                        {/* // <TableRow>
														// 	<TableCell align='center'>
														// 		<Typography>
														// 			{key}
														// 		</Typography>
														// 	</TableCell>

														// 	<TableCell align='center'>
														// 		<Typography>
														// 			{r.peca}
														// 		</Typography>
														// 	</TableCell>
														// 	<TableCell align='center'>
														// 		<Typography>
														// 			{r.qtd}
														// 		</Typography>
														// 	</TableCell>
														// 	<TableCell align='center'>
														// 		<Typography>
														// 			{r.preco}
														// 		</Typography>
														// 	</TableCell>
														// </TableRow> );
												})} */}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </Paper>
            </Container>
          </form>
        </div>
      </>
    );
  }
>>>>>>> a2fe6ed7cfbbcc9ecda714b6fdc1852ac07bef42
};

export default _new;
