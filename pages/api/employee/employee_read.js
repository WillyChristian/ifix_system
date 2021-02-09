import connectToDatabase from '../../utils/mongodb'

const readEmployee = async (req, res) => {
    const db = await connectToDatabase()
    const attendant = await db.collection('funcionarios').find("attendant").toArray()
    const tecnician = await db.collection("funcionarios").find("tecnician").toArray()

    if(attendant.length === 0 || tecnician.length === 0){
        res.status(500).json({message: "Erro ao carregar os dados"})
        return
    }else{
        const employee = [ attendant, tecnician]
        res.status(200).send(employee)
    }
}   

export default readEmployee

