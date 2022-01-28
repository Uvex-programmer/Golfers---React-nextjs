import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.golfclub.create({
    data: {
      image: 'admin2@admin2.com',
      url: 'https://www.bosjokloster.se/',
      description:
        'Bosjökloster GK:s golfbana är ritad av Douglas Brasier och blev spelklar 1974. De första 9 hålen invigdes den 24 augusti 1974 och den 9 augusti 1975 stod alla 18 hålen klara. Banan är av karaktär "Öppen parkbana". Golfbanan har idag, förutom de ursprungliga väl inbunkrade greenerna, fler svårigheter på vägen mellan tee och green än ryktet kanske säger.',
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
