import React from 'react'
import {
    makeStyles,
} from '@material-ui/core'

//Componentes
import Adm from "../adm";
import Cliente from "../cliente";
import OrdemServico from "../os";

//Estilos
const style = makeStyles({
    menu:{
        display: 'flex',
        justifyContent:"space-around",
        alignItems: 'center',
        maxHeight: '50px'
    },
    ul:{
        display: 'flex',
        "& li":{
            margin:"0rem 0.9rem",
            display: 'block',
            "& a":{
                textDecoration: 'none',
                color: "#000",
                "&:hover":{
                    color:'#949494'
                }
            }
        }
    }
})
export default function Menu({loggedUser, setpage}) {
    const menuStyles = style()
    return (
        <div className={menuStyles.menu}>
            <ul className={menuStyles.ul}>
                <li onClick={() => setpage(<OrdemServico/>)}><a href="#">Ordens de Serviço</a></li>
                <li onClick={() => setpage(<Cliente/>)}><a href="#">Clientes</a></li>
                <li onClick={() => setpage(<Adm/>)}><a href="#">Administrativo</a></li>
            </ul>
            <span>
                Olá,{loggedUser.nome}
            </span>
        </div>
    )
}
