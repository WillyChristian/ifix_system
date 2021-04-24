import { connectToDatabase } from "../../../../util/mongodb";

export default async (req, res) => {
  const os = JSON.parse(req.body);
  // if(client.length === 0 || attendant.length === 0){
  // 	res.status(400).json({
  // 		message: "informe um cliente e um atendente válido"
  // 	})
  // 	return
  // }

  const { db } = await connectToDatabase();
  const response = await db.collection("service_order").insertOne(os);
  //     reported_issue: "",
  //     repair: "",
  //     client: [
  //       {
  //         id: client.ObjectId("_id"),
  //         name: client.name,
  //         phone: client.phone,
  //       },
  //     ],
  //     attendant: [
  //       {
  //         id: client.ObjectId("_id"),
  //         name: attendant.name,
  //         store: attendant.store,
  //       },
  //     ],
  //     tecnician: [],
  //     product: [],
  //     status: "",
  //     comments: [],
  //   });
  //   res.status(200).json(response);
  res.send(response);
};
