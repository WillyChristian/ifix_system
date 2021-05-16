import React, { useState } from "react";

//Components
// import Login from "../../login/index";
import Menu from "../../components/menu";

const osForm = () => {
  //Função para buscar os dados no banco

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
      </div>
    </>
  );
};

export default osForm;
