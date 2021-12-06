const HomePage = () => {
  return (
    <div className='home'>
      <figure className='home__hero'>
        <img
          className='home__hero-img'
          src='https://upload.wikimedia.org/wikipedia/commons/a/ae/Great_Waters_at_Reynolds_Lake_Oconee_-_Oct_2019.jpg'
          alt=''
        />
        <caption className='home__hero-caption'>
          <h1>Golfers!</h1>
          <h4>Vi är ett gott gäng som gillar att lira golf på söndagar</h4>
        </caption>
      </figure>
    </div>
  )
}

export default HomePage
