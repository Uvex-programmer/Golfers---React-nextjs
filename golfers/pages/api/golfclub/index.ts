import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      let response = await prisma.golfclub.findMany({
        take: 20,
        select: {
          url: true,
          image: true,
        },
      })

      res.json(response)
    } catch (error: any) {
      res.send(error)
    }
  }
}
