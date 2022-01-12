import TwoColTextImg from '../components/fullscreenComponents/TwoColTextImg'
import ThreeColBox from '../components/fullscreenComponents/ThreeColBox'

const HomePage = () => {
  return (
    <div className='home'>
      <figure className='hero'>
        <img
          className='hero__img'
          src='https://www.stonewatergolf.com/images/slideshow/slide1.jpg'
          alt=''
        />
        <figcaption className='hero__caption'>
          <h1>Golfers!</h1>
          <h4>Vi är ett gott gäng som gillar att lira golf på söndagar</h4>
        </figcaption>
      </figure>

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

      <ThreeColBox />

      <section className='join'>
        <div className='join__text'>
          <h1>Är ni intresserad av Söndagsgänget? </h1>
          <h2>Hör gärna av er till oss!</h2>
        </div>
        <button className='btn btn--white'>Kontakta oss</button>
      </section>
    </div>
  )
}

export default HomePage
