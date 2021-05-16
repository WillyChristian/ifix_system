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
import { searchSO, getService } from "./components/source";
import Login from "../../../login/index";

const SearchOS = () => {
  const [session] = useSession();
  const style = SearchStyle();

  if (!session) return <Login />;
  if (session) {
    return (
      <>
        <Menu />
        <Frame>
          <Grid container xs={12} className={style.container}>
            <Grid item xs={6} className={style.line}>
              <TextField id="os" placeholder="Número da OS" />
              <Button onClick={() => getService()}>Consulta</Button>
            </Grid>
          </Grid>
        </Frame>
      </>
    );
  }
};

export default SearchOS;
