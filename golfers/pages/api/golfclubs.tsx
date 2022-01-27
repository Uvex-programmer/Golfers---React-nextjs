// // just example how API folder work against DB in NEXT JS
// import connectDB from '../../utils/mongoDBConnect'
// import type { NextApiRequest, NextApiResponse } from 'next'
// import GolfClub from '../../mongoDB/models/GolfClub'

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   switch (req.method) {
//     case 'GET': {
//       try {
//         let golfclub = await GolfClub.findById('61e0599bb8175ebb94c23e97')
//         console.log(golfclub)

//         res.status(200).json({ success: true, data: golfclub })
//       } catch (error) {
//         res.status(400).json({ success: false })
//       }
//       break
//     }
//     case 'POST': {
//       try {
//         console.log('post')

//         const { name, description } = req.body

//         var golfclub = new GolfClub({
//           name: name,
//           description: description,
//         })
//         var club = await golfclub.save()
//         return res.send({ club: club })
//       } catch (error: any) {
//         return res.send(error.message)
//       }
//     }
//     case 'PUT': {
//       return
//     }
//     case 'DELETE': {
//       return
//     }
//   }
// }
// export default handler
