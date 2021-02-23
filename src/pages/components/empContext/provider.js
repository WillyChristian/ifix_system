import React, { useState, useEffect } from "react";
import employeeContext from "./context";
import axios from "axios";

const Provider = ({ children }) => {
	const [emp, setEmp] = useState();
	const [logged, setLogged] = useState(false);

	useEffect(() => {
		axios
			.get("api/employee/initial_search")
			.then((response) => setEmp(response.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<employeeContext.Provider
			value={{
				emp,
				logged,
				setLogged,
			}}
		>
			{children}
		</employeeContext.Provider>
	);
};

export default Provider;
