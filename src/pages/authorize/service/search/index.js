import React from "react";
import { useSession } from "next-auth/client";
import { ButtonGroup, Button, TextField } from "@material-ui/core";

// General Componentes
import Frame from "../../../components/frame";
import Menu from "../../../components/menu";
import Login from "../../../login/index";

//Internal components
import SearchStyle from "./components/style";
import { getData } from "./components/source";
import CollapsibleTable from "./components/table";

const SearchOS = () => {
  const [session] = useSession();
  const style = SearchStyle();

  if (!session) return <Login />;
  if (session) {
    return (
      <>
        <Menu />
        <Frame>
          <div className={style.main}>
            <div className={style.header}>
              <TextField
                className="inpt"
                id="os"
                label="Numero da OS"
                name="os"
                variant="outlined"
              />
              <TextField
                className="inpt"
                id="cpf"
                label="CPF"
                name="cpf"
                variant="outlined"
              />
              <TextField
                className="inpt"
                id="name"
                label="Nome"
                name="name"
                variant="outlined"
              />
            </div>
            <div className={style.sub_header}>
              <ButtonGroup variant="outlined">
                <Button className="btn" onClick={getData}>
                  Buscar
                </Button>
                <Button className="btn" onClick={getData}>
                  Limpar
                </Button>
              </ButtonGroup>
            </div>
            <div className={style.container}>
              <CollapsibleTable />
            </div>
          </div>
        </Frame>
      </>
    );
  }
};

export default SearchOS;
