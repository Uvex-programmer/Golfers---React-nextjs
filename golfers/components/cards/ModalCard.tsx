import React from 'react'
import CloseModal from '../buttons/CloseModalButton'

interface CardProps {
  imageSrc: string
  alt: string
}

const Card: React.FC<CardProps> = ({ children, imageSrc, alt }) => (
  <div className='modalCard'>
    <CloseModal />
    {children}
  </div>
)

export default Card
