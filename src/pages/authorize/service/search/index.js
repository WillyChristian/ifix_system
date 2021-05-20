import React from "react";
import { useSession } from "next-auth/client";

// General Componentes
import Frame from "../../../components/frame";
import Menu from "../../../components/menu";
import Login from "../../../login/index";

//Internal components
import SearchStyle from "./components/style";
import {digzOla} from './components/source'
import CollapsibleTable from './components/table'

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
              <label htmlFor="busca">Busca de OS</label>
              <input type="number" />
              <button onClick={digzOla}>Buscar</button>
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
