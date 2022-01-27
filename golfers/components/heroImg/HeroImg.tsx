import React from 'react'

interface Props {
  heading?: string
  text?: string
  img: string
}

const HeroImg = (props: Props) => {
  let { heading, text, img } = props
  return (
    <figure className='hero'>
      <img className='hero__img' src={img} alt='' />
      <figcaption className='hero__caption'>
        <h1>{heading}</h1>
        <h4>{text}</h4>
      </figcaption>
    </figure>
  )
}

export default HeroImg
