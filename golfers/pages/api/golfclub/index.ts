import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'
import { getToken } from 'next-auth/jwt'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const secret = process.env.SECRET

      const tokenn = await getToken({ req, secret })
      console.log('JSON Web Token', tokenn)

      let response = await prisma.golfclub.findMany({
        select: {
          url: true,
          image: true,
          name: true,
        },
      })
      res.json(response)
    } catch (error: any) {
      res.send(error)
    }
  }
}
