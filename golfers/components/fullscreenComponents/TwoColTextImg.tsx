type Props = {
  imgs: string[]
  paragraph: string
  header: string
  button: [boolean, string]
  href: string
}

const TwoColTextImg: React.FC<Props> = (props: Props) => {
  return (
    <section className='TwoColTextImg'>
      <div className='TwoColTextImg__text'>
        <h1>{props.header}</h1>
        <p>{props.paragraph}</p>
        {props.button[0] === true && (
          <a
            className='btn btn--black margin-top-medium TwoColTextImg__btn'
            href={props.href}
          >
            {props.button[1]} &rarr;
          </a>
        )}
      </div>
      <div className='TwoColTextImg__images'>
        {props.imgs.map((img, index) => (
          <img
            key={index}
            className={`TwoColTextImg__img TwoColTextImg__img--${index + 1}`}
            src={img}
            alt={`photo-${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default TwoColTextImg
