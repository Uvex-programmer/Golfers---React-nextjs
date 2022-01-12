import ClubCard from '../cards/ClubCard'

const clubs = [
  {
    club: 'Alvesta',
    img: 'https://www1.idrottonline.se/globalassets/2448dae6b9be4945ae4e8894d319f6ec/bildspel-2/klubbhuset-2.jpg?w=980',
    text: 'Golfbanan med 18 hål .',
  },
  {
    club: 'Ekerum',
    img: 'https://www.nordicgolfers.com/fileadmin/user_upload/ekerum_resort_cover_picture.jpg',
    text: 'Ekerum GK är en ideell förening med syfte att erbjuda golfklubbens medlemmar möjlighet att spela.',
  },
  {
    club: 'Alvesta',
    img: 'https://www1.idrottonline.se/globalassets/2448dae6b9be4945ae4e8894d319f6ec/bildspel-2/klubbhuset-2.jpg?w=980',
    text: 'Golfbanan med sina 18 hål blev spelklar i juni 1992.',
  },
]

const TwoColTextImg: React.FC = () => {
  return (
    <section className='ThreeColBox'>
      <h1 className='ThreeColBox__heading heading'>Golfklubbar vi lirat på</h1>
      {clubs.map((club, index) => (
        <ClubCard key={index} club={club} />
      ))}
    </section>
  )
}

export default TwoColTextImg
