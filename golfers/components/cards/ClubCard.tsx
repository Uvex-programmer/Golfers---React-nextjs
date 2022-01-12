type Props = {
  club: {
    img: string
    club: string
    text: string
  }
}

const ClubCard: React.FC<Props> = (props) => {
  return (
    <div className='clubcard'>
      <div className='clubcard__picture'>
        <img src={props.club.img} alt='' />
      </div>
      <h4 className='clubcard__heading'>
        <span className='clubcard__heading-span'>
          {props.club.club} Golfklubb
        </span>
      </h4>
      <div className='clubcard__details'>
        <p>{props.club.text}</p>
      </div>
    </div>
  )
}

export default ClubCard
