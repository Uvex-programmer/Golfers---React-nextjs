import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const EMAIL_REGEX = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/
  const PW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.{8,})/

  switch (req.method) {
    case 'GET':
      try {
        let response = await prisma.user.findMany()

        res.json(response)
      } catch (error: any) {
        res.send(error)
      }
      break
    case 'POST':
      try {
        const { email, pw } = req.body
        if (!EMAIL_REGEX.test(email) || !PW_REGEX.test(pw)) {
          res.status(422).json({ message: 'bad input' })
          return
        }

        prisma.user.create({
          data: {
            email: email,
          },
        })
      } catch (error: any) {
        res.send(error)
      }
      breakmessage: 'bad input'
    default:
      break
  }
}
