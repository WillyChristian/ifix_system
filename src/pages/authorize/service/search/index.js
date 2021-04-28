import React, { useState } from "react";
import { useSession } from "next-auth/client";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

//Componentes
import Frame from "../../../components/frame";
import Menu from "../../../components/menu";
import SearchStyle from "./components/style";
import { searchSO } from "./components/source";
import Login from "../../../login/index";

const SearchOS = (props) => {
  const [session] = useSession();
  const [data, setData] = useState({
    os: "",
    date: "",
    status: "",
    client: "",
  });

  function createData(client, os, date, status) {
    return { client, status, os, date };
  }
  const rows = [createData(data.client, data.os, data.date, data.status)];
  const styles = SearchStyle();

  const getServ = () => {
    const os = document.querySelector("#os").value;
    const data = searchSO(os);
    console.log(data);
    // setData({
    //   client_name: data.client_name,
    //   os: data.service,
    //   date: data.date,
    //   status: data.status,
    // });
  };

  if (!session) return <Login />;
  if (session) {
    return (
      <>
        <Menu />
        <Frame>
          <div className={styles.container}>
            <div className="{}">
              <Grid item>
                <TextField id="os" placeholder="Número da OS" />
              </Grid>
              <Grid item>
                <Button onClick={() => getServ()}>Consulta</Button>
              </Grid>
            </div>

            <TableContainer>
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
        </Frame>
      </>
    );
  }
};

export default SearchOS;
