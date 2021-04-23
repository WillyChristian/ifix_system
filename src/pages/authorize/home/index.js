import React from "react";
import { useSession } from "next-auth/client";

//internal components
import Login from "../../login/index";
import Menu from "../../components/menu";
import Frame from "../../components/frame";

const Home = () => {
  const [session] = useSession();

  if (!session) return <Login />;
  if (session) {
    return (
      <>
        <Menu />
        <Frame>
          <h1>Seja Bem Vindo, {session.user.name}</h1>
        </Frame>
      </>
    );
  }
};
export default Home;
