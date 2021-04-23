import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Frame from "../../../components/frame";
import Menu from "../../../components/menu";
import newServiceStyle from "./components/style";

export default function NewService() {
  const style = newServiceStyle();
  return (
    <div>
      <Menu />
      <Frame>
        <div className="header">{/*  AQUI VAI UM CABEÇALHO COM LOGO */}</div>
        <form className={style.root}>
          <fieldset className={style.fieldset}>
            <legend>
              <Typography variant="h4">Orden de Serviço</Typography>
            </legend>
            <div>
              <div>
                <TextField
                  label="Orden de Serviço"
                  name="service"
                  id="service"
                />
                <TextField
                  size="large"
                  label="Nome do Cliente"
                  InputProps={{ style: { width: "300px" } }}
                />
                <TextField label="Data" name="date" id="date" />
              </div>
              <div>
                <TextField label="Aparelho" name="device" id="device" />
                <TextField label="Cor" name="color" id="colo" />
                <TextField label="Capacidade" name="storage" id="storage" />
                <TextField label="IMEI" />
              </div>
            </div>
          </fieldset>

          <fieldset className={style.fieldset}>
            <legend>
              <Typography variant="h4"> Pré-Teste</Typography>
            </legend>
            <div className={style.main}>
              <div>
                <div>
                  <TextField
                    label="Atendente"
                    name="atendente"
                    id="atendente"
                    fullWidth
                  />
                </div>
                <div>
                  <TextField label="Botão Home" name="home" id="home" />
                  <TextField label="TouchID" name="touchid" id="touchid" />
                </div>
                <div>
                  <TextField
                    label="Câmera Traseira"
                    name="cam_tras"
                    id="cam_tras"
                  />
                  <TextField
                    label="Foco da Camera"
                    name="cam_tras_foco"
                    id="cam_tras_foco"
                  />
                  <TextField label="Flash" name="flash" id="flash" />
                </div>
                <div>
                  <TextField label="Carcaça" name="carcaca" id="carcaca" />
                  <TextField
                    label="Parafusos Externos"
                    name="paraf_ext"
                    id="paraf_ext"
                  />
                </div>
                <div>
                  <TextField
                    label="Micorfones"
                    name="microfones"
                    id="microfones"
                    placeholder="ligação, câmeras, etc."
                  />
                  <TextField
                    label="Auricular / Auto-falante"
                    name="caixa-som"
                    id="caixa-som"
                  />
                </div>
              </div>

              <div>
                <div>
                  <TextField
                    label="Ligou ?"
                    name="ligou"
                    id="ligou"
                    fullWidth
                  />
                </div>
                <div>
                  <TextField
                    label="Volume e Vibra"
                    name="volume_vibra"
                    id="volume_vibra"
                  />
                  <TextField label="Botão Power" name="power" id="power" />
                </div>
                <div>
                  <TextField
                    label="Câmera Frontal"
                    name="cam_fron"
                    id="cam_fron"
                  />
                  <TextField
                    label="Foco da Câmera Frontal "
                    name="cam_fron_foco"
                    id="cam_fron_foco"
                  />
                </div>
                <div>
                  <TextField label="Wi-fi" name="wifi" id="wifi" />
                  <TextField
                    label="Bluetooth"
                    name="bluetooth"
                    id="bluetooth"
                  />
                  <TextField label="Cartão SIM" name="chip" id="chip" />
                </div>
                <div>
                  <TextField
                    label="Dock / Carregamento"
                    name="dock"
                    id="dock"
                  />
                  <TextField
                    label="Cartão de Memória"
                    name="memory_card"
                    id="memory_card"
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className={style.fieldset}>
            <div className={style.main}>
              <TextField
                variant="outlined"
                label="Defeito Reportado pelo cliente"
                multiline
                rows={5}
                InputProps={{ style: { width: "300px" } }}
              />
              <TextField
                variant="outlined"
                label="Reparo executado pelo técnico"
                multiline
                rows={5}
                InputProps={{
                  style: {
                    width: "300px",
                  },
                }}
              />
            </div>
          </fieldset>
        </form>
      </Frame>
    </div>
  );
}
