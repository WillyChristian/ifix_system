import { useFormik } from "formik";
import * as Yup from "yup";

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      service: "",
      client_name: "",
      status: "",
      date: "",
      device: "",
      color: "",
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
export default Formik;
