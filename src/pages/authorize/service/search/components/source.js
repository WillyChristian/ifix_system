import axios from "axios";
import { useState } from "react";

const searchSO = (props) => {
  const data = axios
    .get(`../../api/service_orders/${props}`)
    .then((response) => response);
  console.log(data);
};

const getService = () => {};

export { searchSO, getService };
