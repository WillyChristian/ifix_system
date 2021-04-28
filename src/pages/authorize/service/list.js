import React, { useState } from "react";
import { useSession } from "next-auth/client";
import {
  makeStyles,
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import axios from "axios";

//Components
import Login from "../../login/index";
import Menu from "../../components/menu";

const osForm = () => {
  const [session] = useSession();
  const [data, setData] = useState({
    os: "",
    date: "",
    status: "",
    client: "",
  });

  if (!session) return <Login />;
  if (session) {
    //Função para buscar os dados no banco
    const getListSo = () => {
      const os = document.querySelector("#os").value;
      axios.get(`../../api/service_orders/${os}`).then((response) => {
        const data = response.data[0];
        setData({
          client_name: data.client_name,
          os: data.service,
          date: data.date,
          status: data.status,
        });
      });
    };

    // criação da tabela
    function createData(client, os, date, status) {
      return { client, status, os, date };
    }

    const rows = [createData(data.client, data.os, data.date, data.status)];
    return (
      <>
        <Menu />
        <div className={componentStyle.main}>
          <div className={componentStyle.search}>
            <Grid item>
              <TextField id="os" placeholder="Número da OS" />
            </Grid>
            <Grid item>
              <Button onClick={() => getListSo()}>Consulta</Button>
            </Grid>
          </div>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">#</TableCell>
                  <TableCell align="center">OS</TableCell>
                  <TableCell align="center">Nome do Cliente</TableCell>
                  <TableCell align="center">Abertura</TableCell>
                  <TableCell align="center">Status da OS</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              {rows?.map((row, id) => {
                return (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">{id}</TableCell>
                      <TableCell align="center">
                        <Typography>{row.os}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography>{row.client}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography>{row.date}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography>{row.status}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => alert("Função ainda por criar")}
                        >
                          Visualizar
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          color="secondary"
                          variant="contained"
                          onClick={() => alert("Função ainda por criar")}
                        >
                          Editar
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
            </Table>
          </TableContainer>
        </div>
      </>
    );
  }
};

export default osForm;
