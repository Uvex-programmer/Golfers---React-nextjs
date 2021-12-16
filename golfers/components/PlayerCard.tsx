type playerInfo = {
  img: string
  info: string
}

const PlayerCard: React.FC<playerInfo> = (props) => {
  return (
    <div className='playercard'>
      <img className='playercard__img' src={props.img} alt='' />
      <h2 className='playercard__info'>{props.info}</h2>
    </div>
  )
}

export default PlayerCard
