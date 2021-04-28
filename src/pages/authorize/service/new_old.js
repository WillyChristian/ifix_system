import React, { useState } from "react";
import useSWR from "swr";
import { useFormik } from "formik";
import * as Yup from "yup";

//Componentes

// Função para trazer os dados do BD
const fetcher = (url) => fetch(url).then((r) => r.json());
const getProducts = (url) => fetch(url).then((r) => r.json());

const _new = () => {
  // Verificar se o usuário esta logado

  // const { data: products } = useSWR("../../api/products/read", getProducts); //Lista os produtos do BD
  const { data: employee } = useSWR("../../api/employee/_read", fetcher); // Lista os funcionários bo BD
  // const [parts, setParts] = useState([
  //   {
  //     qtd: "",
  //     peca: "",
  //     price: "",
  //   },
  // ]);

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
      other: "",
      entry: "",
      withdrawal: "",
      prob_descrpt: "",
      attendant: "",
      parts: [],
    },
    onSubmit: async (values) => {
      const response = await fetch("/api/service_orders/_create", {
        method: "POST",
        body: JSON.stringify(values),
      });
    },
    validationSchema: Yup.object({
      //Validação dos campos preenchidos
    }),
  });

  const layout = Layout();

  //Verifica se há uma sessão ativa e rotona à página login caso não haja

    if (!employee) return <LoadPage />;

    return (
      <>
        <Menu />
        <Frame>
          <div>
            <form action={formik.handleSubmit}>
              <div className={layout.coloum}>
                <div className={layout.line}>
                  <div className={layout.coloum}>
                    <ClientContent
                      handleChange={formik.handleChange}
                      values={formik.values}
                    />
                  </div>
                  <div className={layout.coloum}>
                    <DeviceContent
                      handleChange={formik.handleChange}
                      values={formik.values}
                    />
                  </div>
                </div>
                <div className={layout.line}>
                  {/* <div className={layout.coloum}>
                    <DeadLine handleChange={formik.handleChange} />
                  </div> */}
                  <ConditionsContent
                    handleChange={formik.handleChange}
                    values={formik.values}
                  />
                  <div className={layout.coloum}>
                    <ReportContent
                      handleChange={formik.handleChange}
                      values={formik.values}
                      setFields={formik.setFieldValue}
                    />
                  </div>
                </div>
                <div className={layout.line}></div>
              </div>

              {/* <Divider />
						<Typography variant={"h4"}>Parte Técnica</Typography>
						<Divider />
						<Container className={formStyles.div}>
							
								<ResolutionContent
									handleChange={formik.handleChange}
									values={formik.values}
									setFields={formik.setFieldValue}
								/>
							</Paper>
						</Container>
						<Container className={formStyles.div}>
							
								<PartsContent
									prod={products}
									part={parts}
									update={setParts}
									handleChange={formik.handleChange}
									values={formik.values}
									setFields={formik.setFieldValue}
								/>
							</Paper>
						</Container> */}
              {/* <Container>
              <button type="submit" onClick={formik.handleSubmit}>
                Enviar
              </button>
            </Container>
          </form> */}
            </form>
          </div>
        </Frame>
      </>
    );
  }
};

export default _new;
