import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '../../../prisma/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const id = req.query.id

      let response = await prisma.user.findFirst({
        where: {
          id: id.toString(),
        },
        select: {
          email: true,
          image: true,
          Handicap: true,
        },
      })

      res.json(response)
    } catch (error: any) {
      res.send(error)
    }
  }
}
