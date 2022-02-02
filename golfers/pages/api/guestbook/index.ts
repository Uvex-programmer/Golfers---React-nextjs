import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { name, text } = req.body

      let message = await prisma.bookMessage.create({
        data: {
          name: name,
          text: text,
        },
      })

      res.json(message)
    } catch (error: any) {
      res.send(error)
    }
  }
  if (req.method === 'GET') {
    try {
      let messages = await prisma.bookMessage.findMany({
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
        select: {
          createdAt: true,
          name: true,
          text: true,
        },
      })

      res.json(messages)
    } catch (error: any) {
      res.send(error)
    }
  }
}
