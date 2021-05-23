import React from "react";
import Link from "next/link";
import { makeStyles, Button, Typography } from "@material-ui/core";
import { signIn, signOut, useSession } from "next-auth/client";

//Estilos
const style = makeStyles({
  menu: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "70px",
    backgroundColor: "#444444",
    borderBottom: "4px solid #f9c400",
    fontSize: "large",
  },
  ul: {
    display: "flex",
    listStyleType: "none",
    "& :hover": {
      backgroundColor: "#f9c400",
      color: "#9e7b00",
    },
  },
  a: {
    padding: "10px",
    borderRadius: "5px",
    margin: "0px 0.5rem",
    listStyle: "none",
    textDecoration: "none",
    color: "#fff",
  },
  login: {
    float: "right",
    display: "flex",
    width: "200px",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
const Menu = () => {
  const menuStyles = style();
  const [session, loading] = useSession();

  return (
    <div className={menuStyles.menu}>
      <ul className={menuStyles.ul}>
        <Link href="/">
          <a className={menuStyles.a}> HOME</a>
        </Link>
        <Link href="/authorize/service/new/">
          <a className={menuStyles.a}> Abrir OS </a>
        </Link>
        <Link href="/authorize/service/search/">
          <a className={menuStyles.a}> Consulta</a>
        </Link>
        <Link href="/authorize/client/new">
          <a className={menuStyles.a}> Cadastro</a>
        </Link>
        <Link href="/authorize/part/">
          <a className={menuStyles.a}>Estoque</a>
        </Link>
      </ul>
      <div className={menuStyles.login}>
        {session && (
          <>
            <span>
              <Typography style={{color:"#fff"}} variant="body1">{session.user.name}</Typography>
            </span>

            <Button variant="outlined" style={{color:"#fff", border: "1px solid #ddd"}} onClick={() => signOut()}>
              Sair
            </Button>
          </>
        )}
        {!session && (
          <Button
            size="small"
            variant="outlined"
            style={{color:"#fff", border: "1px solid #ddd"}} 
            onClick={() => signIn("auth0", { callbackUrl: "/authorize/home" })}
          >
            Logar
          </Button>
        )}
      </div>
    </div>
  );
};
export default Menu;
