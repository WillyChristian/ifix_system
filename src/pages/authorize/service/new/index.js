import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useSession } from "next-auth/client";

// Componentes
import Frame from "../../../components/frame";
import Menu from "../../../components/menu";
import Login from "../../../login/index";
import newServiceStyle from "./components/style";
import Formik from "./components/source";

export default function NewService() {
  const [session] = useSession();
  const style = newServiceStyle();
  const formik = Formik();

  if (!session) return <Login />;
  if (session) {
    return (
      <div>
        <Menu />
        <Frame>
          <div className="header">{/*  AQUI VAI UM CABEÇALHO COM LOGO */}</div>
          <form className={style.root} onSubmit={formik.handleSubmit}>
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
                    value={formik.values.service}
                    onChange={formik.handleChange}
                    // helperText={formik.errors.service}
                    // error={formik.errors.service}
                    InputProps={{
                      style: {
                        width: "120px",
                      },
                    }}
                  />
                  <TextField
                    size="large"
                    label="Nome do Cliente"
                    name="client_name"
                    id="client_name"
                    InputProps={{ style: { width: "250px" } }}
                    value={formik.values.client_name}
                    onChange={formik.handleChange}
                  />
                  <TextField
                    label="Data"
                    name="date"
                    id="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                  />
                  <TextField
                    size="large"
                    label="Status"
                    name="status"
                    id="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <TextField
                    label="Aparelho"
                    name="device"
                    id="device"
                    value={formik.values.device}
                    onChange={formik.handleChange}
                  />
                  <TextField label="Cor" name="color" id="color" />
                  <TextField
                    label="Capacidade"
                    name="storage"
                    id="storage"
                    value={formik.values.storage}
                    onChange={formik.handleChange}
                  />
                  <TextField
                    label="IMEI"
                    name="imei"
                    id="imei"
                    value={formik.values.imei}
                    onChange={formik.handleChange}
                  />
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
                      name="attendant"
                      id="attendant"
                      fullWidth
                      value={formik.values.attendant}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Botão Home"
                      name="home"
                      id="home"
                      value={formik.values.home}
                      onChange={formik.handleChange}
                    />
                    <TextField
                      label="TouchID / FaceID"
                      name="touchid"
                      id="touchid"
                      value={formik.values.touchid}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Câmera Traseira"
                      name="cam_tras"
                      id="cam_tras"
                      value={formik.values.cam_tras}
                      onChange={formik.handleChange}
                    />
                    <TextField
                      label="Foco da Camera"
                      name="cam_tras_foco"
                      id="cam_tras_foco"
                      value={formik.values.cam_tras_foco}
                      onChange={formik.handleChange}
                    />
                    <TextField
                      label="Flash"
                      name="flash"
                      id="flash"
                      value={formik.values.flash}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Carcaça"
                      name="rear_case"
                      id="rear_case"
                      value={formik.values.rear_case}
                      onChange={formik.handleChange}
                    />
                    <TextField
                      label="Parafusos Externos"
                      name="screws"
                      id="screws"
                      value={formik.values.screws}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Micorfones"
                      name="microphones"
                      id="microphones"
                      placeholder="ligação, câmeras, etc."
                      value={formik.values.microphones}
                      onChange={formik.handleChange}
                    />
                    <TextField
                      label="Auricular / Auto-falante"
                      name="speakers"
                      id="speakers"
                      value={formik.values.speakers}
                      onChange={formik.handleChange}
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
                      value={formik.values.ligou}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Volume e Vibra"
                      name="vibracall"
                      id="vibracall"
                      value={formik.values.vibracall}
                      onChange={formik.handleChange}
                    />
                    <TextField
                      label="Botão Power"
                      name="power_btn"
                      id="power_btn"
                      value={formik.values.power_btn}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Câmera Frontal"
                      name="front_cam"
                      id="front_cam"
                      value={formik.values.front_cam}
                      onChange={formik.handleChange}
                    />
                    <TextField
                      label="Foco da Câmera Frontal "
                      name="front_cam_foco"
                      id="front_cam_foco"
                      value={formik.values.front_cam_foco}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Wi-fi"
                      name="wifi"
                      id="wifi"
                      value={formik.values.wifi}
                      onChange={formik.handleChange}
                    />
                    <TextField
                      label="Bluetooth"
                      name="bluetooth"
                      id="bluetooth"
                      value={formik.values.bluetooth}
                      onChange={formik.handleChange}
                    />
                    <TextField
                      label="Cartão SIM"
                      name="sim"
                      id="sim"
                      value={formik.values.sim}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div>
                    <TextField
                      label="Dock / Carregamento"
                      name="dock"
                      id="dock"
                      value={formik.values.dock}
                      onChange={formik.handleChange}
                    />
                    <TextField
                      label="Cartão de Memória"
                      name="memory_sd"
                      id="memory_sd"
                      value={formik.values.memory_sd}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className={style.fieldset}>
              <div className={style.main}>
                <TextField
                  label="Defeito Reportado pelo cliente"
                  name="defect"
                  id="defect"
                  variant="outlined"
                  multiline
                  rows={5}
                  InputProps={{ style: { width: "300px" } }}
                  value={formik.values.defect}
                  onChange={formik.handleChange}
                />
                <TextField
                  label="Reparo executado pelo técnico"
                  name="repair"
                  id="repair"
                  variant="outlined"
                  multiline
                  rows={5}
                  InputProps={{
                    style: {
                      width: "300px",
                    },
                  }}
                  value={formik.values.repair}
                  onChange={formik.handleChange}
                />
              </div>
            </fieldset>
            <div className="container">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </Frame>
      </div>
    );
  }
}
