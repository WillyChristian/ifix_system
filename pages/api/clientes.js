import {connectToDatabase} from '../../util/mongodb'

const Clients = async (req, res) =>{ 
   if(req.method === "POST"){
       const {
        full_name: "",
        cpf: "",
        phone: "",
        cep: "",
        street: "",
        neighbour: "",
        city: ""
       } = req.body
       if(
        !full_name ||
        !cpf ||
        !phone
       ){
         res.status(400).json({message: "Há campos requeridos em branco"})
           return
        }
        const body = JSON.parse(req.body)
        const { db } = await connectToDatabase()
        const response =  await db.collection("clientes").insertOne({})
        const clientReturn = JSON.stringify(response.ops)
        res.send(clientReturn)
   }
        res.status(400).send(err.message)
    
}
export default Clients
