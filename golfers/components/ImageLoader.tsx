import React from 'react'

interface ImageLoaderProps {
  src: string
  alt: string
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ alt, src }) => (
  <div className='imageLoader'>
    <img src={src} alt={alt} />
  </div>
)

export default ImageLoader
