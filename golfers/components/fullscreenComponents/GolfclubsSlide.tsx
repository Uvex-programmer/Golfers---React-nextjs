import ClubCard from '../cards/ClubCard'
import { Golfclub } from '../../interfaces/interface'

interface Props {
  golfclubs: [Golfclub]
}

const GolfclubsSlide: React.FC<Props> = (props) => {
  return (
    <section className='ThreeColBox'>
      <h1 className='ThreeColBox__heading heading'>Golfklubbar vi lirat på</h1>
      {props.golfclubs.map((club, index) => (
        <ClubCard key={index} club={club} />
      ))}
    </section>
  )
}

export default GolfclubsSlide
