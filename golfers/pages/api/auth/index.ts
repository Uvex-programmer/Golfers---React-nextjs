import { NextApiRequest, NextApiResponse } from 'next'
import {
  validateEmail,
  validatePassword,
  hashPassword,
} from '../../../utils/auth'
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

        if (validateEmail(email) === true || validatePassword(pw) === true) {
          res.status(422).json({ message: 'bad input' })
          return
        }

        let checkIfUserExists = await prisma.user.findFirst({
          where: {
            email: email,
          },
        })

        if (checkIfUserExists) {
          res.json({ message: 'user already exists' })
          console.log('already exists')

          return
        }

        const hashedPassword = await hashPassword(pw)

        let ress = await prisma.user.create({
          data: {
            email: email,
            password: hashedPassword,
          },
        })
        res.json(ress)
      } catch (error: any) {
        res.send(error)
      }
      break
    default:
      break
  }
}
