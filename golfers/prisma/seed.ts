import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.golfclub.create({
    data: {
      image:
        'https://www.golfpaket.se/wp-content/uploads/bild-bosjokloster-golfklubb-1.jpg',
      url: 'https://www.bosjokloster.se/',
      name: 'Bosjökloster',
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
