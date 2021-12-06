// just example how API folder work against DB in NEXT JS

// const handler = (req, res) => {
//   if (req.method === 'POST') {
//     const data = req.body

//     const { title, image, address, description } = data
//     const db = client.db()

//     const meetups = db.collection('meetups')
//     const result = await meetups.insertOne(data)

//     client.close()

//     res.status(201).json({message: 'Heello, error!'})
//   }
// }

// export default handler
