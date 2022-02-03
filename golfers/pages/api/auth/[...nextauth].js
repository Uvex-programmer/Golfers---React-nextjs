import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { comparePassword } from '../../../utils/auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../prisma/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        })

        if (!user) {
          throw new Error('No user found!')
        }

        const isValid = await comparePassword(
          credentials.password,
          user.password
        )
        if (!isValid) {
          throw new Error('Could not login!')
        }
        const data = {
          id: user.id,
          role: user.role,
        }
        return { data }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  jwt: {
    secret: process.env.SECRET,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user.data
      }
      return token
    },

    session: async ({ session, token, user }) => {
      session.user = token.user

      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
})
