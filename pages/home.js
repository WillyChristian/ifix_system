import {useState, useEffect} from 'react'
import {
    makeStyles,
    Container
} from '@material-ui/core'

//Componentes
import Menu from './components/Menu'

//Estilos
const style = makeStyles({
    main:{
        height:'100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Home = ({user}) =>{
    const [page, setPage] = useState()

    const contStyle = style()

    useEffect(() =>{
        console.log(page)
    },[])
    return(
        <>
            <Menu loggedUser={user} setpage={setPage}/>
            {page}
        </>
    )
}

export default Home