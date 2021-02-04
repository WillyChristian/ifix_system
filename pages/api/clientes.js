import {connectToDatabase} from '../../util/mongodb'

const Clients = async (req, res) =>{ 
    try {
        const body = JSON.parse(req.body)
        const { db } = await connectToDatabase()
        const response =  await db.collection("clientes").insertOne({
            ...body
        })
        const clientReturn = JSON.stringify(response.ops)
        res.send(clientReturn)
    } catch(err){
        res.status(400).send(err.message)
    }
}
export default Clients