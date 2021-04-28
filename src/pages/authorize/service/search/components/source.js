import axios from "axios";

const searchSO = (props) => {
  const data = axios
    .get(`../../api/service_orders/${props}`)
    .then((response) => response);
  console.log(data);
};

export { searchSO };
