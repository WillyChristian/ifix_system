import {useState} from 'react'
import {Container, Button, Grid, TextField, Typography} from '@material-ui/core'
import { connectToDatabase } from '../util/mongodb'

//Component

const Login =({funcionarios}) => {
  const [user, setUser] = useState({
    isLogged: false,
    username: "",
    pass:"",
    status: false
  })

  const insertCredentials = (event) =>{
    const value = event.target.value
    const key = event.target.name
    setUser(old => ({
      ...old,
      [key]: value
    }))
  }
  const loginAuth = () =>{
    const list_func = JSON.parse(funcionarios)

    let userLogged
    list_func.map( e =>{
      if(e.nome === user.username){
        if(e.pass === user.pass){
          userLogged = e
        }
      }
    })
    !userLogged ? setUser({status:true}) : setUser({username: userLogged, isLogged: true})
  }

  if (user.isLogged) return <Home user={user.username} />
  if(!user.isLogged){ 
  return (
    <>
      <Container>
        <form>
          <fieldset>
            <legend></legend>
            <Grid container spacing={2} alignItems="center" justify="center" >
                <Grid item>
                  <TextField label="Username" variant="outlined" onChange={insertCredentials} name="username" />
                </Grid>
                <Grid item>
                <TextField label="Password" variant="outlined" onChange={insertCredentials} name="pass" />
                </Grid>
                <Grid item>
                  <Button variant="outlined" onClick={loginAuth} >Logar</Button>
                </Grid>
            </Grid>
          </fieldset>
        </form>
        <Typography color="error" >{user.status === true ? "Usuario ou senha invalidos." :""}</Typography>
      </Container>
    </>
  )}
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  const temp_func = await db.collection("funcionarios").find({}).toArray()
  const funcionarios = JSON.stringify(temp_func)
  return {
    props: { funcionarios },
  }
}


export default Login