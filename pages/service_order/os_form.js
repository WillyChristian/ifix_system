import React, {useState} from 'react'
import {
    Container,
    makeStyles,
    Button,
    Grid
} from "@material-ui/core"

const style = makeStyles({
    main:{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh"
    }
})


const osForm = (props) =>{
    const {} = useState({
        reported_issue: "",
		repair: "",
		client,
		attendant,
		tecnician: [],
		product: [],
		status: "",
		comments: []
    })
    const atualizar = (event) =>{
    
    }
    const cadastrar = () =>{
    
    }
    const componentStyle = style()
    return (
        <div className={componentStyle.main}>
            <Grid container >
                <Grid item >
                    <TextField />
                </Grid>
                <Grid item >
                    <TextField />
                </Grid>
            </Grid>
            <Container>
                <Button
                    onClick={()=>cadastrar()}
                >
                    Eviar
                </Button>
            </Container>        
        </div>
    )
}

const getServerSideProps =(context) =>{
    const employee = await fetch('/api/employee')
    const tecnician = employee[1]
    return {
        props: {
            tecnician
        }
    }   
}