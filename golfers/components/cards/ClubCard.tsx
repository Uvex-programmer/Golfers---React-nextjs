import { Golfclub } from '../../interfaces/interface'

interface Props {
  club: Golfclub
}

const ClubCard: React.FC<Props> = (props) => {
  const navigateUrl = () => {
    const url: string = props.club.url
    window.location.href = `${url}`
  }

  return (
    <div className='clubcard' onClick={navigateUrl}>
      <div className='clubcard__picture'>
        <img src={props.club.image} alt='' />
      </div>
      <h4 className='clubcard__heading'>
        <span className='clubcard__heading-span'>
          {props.club.name} Golfklubb
        </span>
      </h4>
    </div>
  )
}

export default ClubCard
