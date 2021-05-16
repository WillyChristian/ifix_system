import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

// async function newOS() {
//   const os = res.newOS;
//   return os;
// }

export const getOS = async () => {
  const res = await fetch("/api/service_orders/settings_get");
  const data = await res.json();
  const os = data.newOS;
  return typeof os;
};

function getDate() {
  const date = new Date().toString();
  const x = date.slice(0, 15);
  return x;
}

export const Formik = () => {
  const formik = useFormik({
    initialValues: {
      service: "",
      client_name: "",
      status: "",
      date: getDate(),
      device: "",
      color: "",
      storage: "",
      imei: "",
      attendant: "",
      home: "",
      touchid: "",
      cam_tras: "",
      cam_tras_foco: "",
      flash: "",
      rear_case: "",
      screws: "",
      microphones: "",
      speakers: "",
      ligou: "",
      power_btn: "",
      front_cam: "",
      front_cam_foco: "",
      wifi: "",
      bluetooth: "",
      sim: "",
      dock: "",
      memory_sd: "",
      defect: "",
      repair: "",
    },
    onSubmit: async (values) => {
      const response = await fetch("/api/service_orders/create", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (response.status === 200) {
        alert("Cadastro Realizado com sucesso!");
        formik.resetForm();
      } else {
        alert("Verifique os dados digitados e tente novamente");
      }
    },
    validationSchema: Yup.object({}),
  });
  return formik;
};
