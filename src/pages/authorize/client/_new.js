import React, { useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { useSession } from "next-auth/client";
import { useFormik } from "formik";
import * as Yup from "yup";

import Menu from "../../components/menu";
import Login from "../../login/index";

const style = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100",
    justifyContent: "center",
    alignItems: "center",
  },
  divForm: {
    width: theme.spacing(100),
    display: "flex",
    flexWrap: "wrap",
    "& div": {
      margin: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "space-around",
    },
  },
  textField: {
    marginLeft: "2px",
    marginRight: "2px",
    width: "25ch",
  },
}));

const Cliente = () => {
  const [session] = useSession();

  if (!session) return <Login />;
  if (session) {
    const clientStyles = style();

    //Validacao do formulário
    const formik = useFormik({
      initialValues: {
        full_name: "",
        cpf: "",
        phone: "",
        cep: "",
        street: "",
        neighbour: "",
        city: "",
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        /*
		   const response = await fetch("/api/clients/create", {
        method: "POST",
        body: JSON.stringify(client),
      });
      if (response.status === 200) {
        alert("Cadastro Realizado!");
      } else {
        alert("Verifique os dados e tente novamente");
      }
		*/
      },
	  validationSchema: Yup.object({
		  full_name: Yup.string().max(15, "Nome deve conter no máximo 15 caracteres"),
      cpf: Yup.string().max(11,"CPF deve conter 11 caracteres"),
      phone: Yup.number("Digite apenas números").max(11,"Celular deve conter 11 caracteres"),
      cep: Yup.number("Digite apenas números").max(7,"CEP deve conter 11 caracteres") ,
      street:Yup.string() ,
      neighbour: Yup.string(),
      city: Yup.string(),
	  }) 
    });

    return (
      <>
        <Menu />
        <div classes={{ root: clientStyles.container }}>
          <div className={clientStyles.divForm}>
            <div>
              <TextField
                id="full_name"
                label="Nome Completo"
                type="text"
                variant="outlined"
                fullWidth
                onChange={formik.handleChange}
              />
              <TextField
                id="cpf"
                label="CPF"
                type="text"
                variant="outlined"
                onChange={formik.handleChange}
              />
              <TextField
                id="phone"
                label="Celular"
                type="text"
                variant="outlined"
                placeholder="Ex.: 12912345678"
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                onChange={formik.handleChange}
              />
              <TextField
                id="street"
                label="Rua"
                variant="outlined"
                onChange={formik.handleChange}
              />
              <TextField
                id="neighbour"
                label="Bairro"
                variant="outlined"
                onChange={formik.handleChange}
              />
              <TextField
                id="city"
                label="Cidade"
                variant="outlined"
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              onClick={formik.handleSubmit}
            >
              Enviar
            </Button>
          </div>
        </div>
      </>
    );
  }
};
export default Cliente;
