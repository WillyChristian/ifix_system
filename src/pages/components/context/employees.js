import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const EmployeesContext = createContext(null);

export function MyContext({children}){
    const [tec, setTec] = useState([])
    const [att, setAtt] = useState([])

    useEffect(()=>{
        axios
            .get('../../api/employee/_read')
            .then(response => {
                response.data.forEach(element => {
                    if(element.category === "Técnico"){
                        setTec(element)
                    }
                    
                    if(element.category === "Atendente"){
                        setAtt(element)
                    }
                    
                });
            })
            .catch(err => console.log(err))
    },[])

    return (
        <EmployeesContext.Provider value={{tec,att}}>
            {children}
        </EmployeesContext.Provider>
    )
}