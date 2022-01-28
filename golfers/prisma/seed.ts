import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.golfclub.create({
    data: {
      image: 'admin2@admin2.com',
      url: 'https://www.bosjoklosterrrrasdsa.se/',
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
