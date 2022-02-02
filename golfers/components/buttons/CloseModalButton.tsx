import React from 'react'

interface CloseModalProps {
  color?: 'error' | 'success'
  onClick?: () => void
}

const CloseModal: React.FC<CloseModalProps> = ({
  color = 'success',
  onClick,
}) => <div className='closeModalBtn'></div>

export default CloseModal
