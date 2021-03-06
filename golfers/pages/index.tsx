import {
  TwoColTextImg,
  GolfclubsSlide,
  HeroImg,
  ContactUs,
} from '../components'
import { GetStaticProps } from 'next'
import { Golfclub } from '../interfaces/interface'
import prisma from '../prisma/prisma'
interface Props {
  golfclubs: [Golfclub]
}

const HomePage = (props: Props) => {
  return (
    <div className='home'>
      <HeroImg
        heading='Golfers!'
        text='Vi är ett gott gäng som gillar att lira golf på söndagar'
        img='https://www.stonewatergolf.com/images/slideshow/slide1.jpg'
      />

      <TwoColTextImg
        imgs={[
          'https://www.golfpaket.se/wp-content/uploads/bild-bosjokloster-golfklubb-1.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bosj%C3%B6kloster_fr%C3%A5n_luften.jpg/1200px-Bosj%C3%B6kloster_fr%C3%A5n_luften.jpg',
          'http://www.tjango.se/files/node_images/ekerum5.jpg',
        ]}
        paragraph='Bosjökloster GK:s golfbana är ritad av Douglas Brasier och blev
          spelklar 1974. De första 9 hålen invigdes den 24 augusti 1974 och den
          9 augusti 1975 stod alla 18 hålen klara. Banan är av karaktär "Öppen
          parkbana". Golfbanan har idag, förutom de ursprungliga väl inbunkrade
          greenerna, fler svårigheter på vägen mellan tee och green än ryktet
          kanske säger.'
        header='Moderklubb, Bosjökloster GK'
        href='https://www.bosjoklostergk.se/'
        button={[true, 'Bosjökloster']}
      />

      <GolfclubsSlide golfclubs={props.golfclubs} />
      <ContactUs />
    </div>
  )
}

HomePage.auth = false

export default HomePage

export const getStaticProps: GetStaticProps = async (context) => {
  let golfclubs = await prisma.golfclub.findMany({
    select: {
      url: true,
      image: true,
      name: true,
    },
  })

  return {
    props: { golfclubs: golfclubs },
  }
}
