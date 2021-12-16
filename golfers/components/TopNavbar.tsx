import Link from 'next/link'

const TopNavbar = () => {
  return (
    <header className='header'>
      <h1 className='header__logo'>
        <Link href='/'>Golfers</Link>
      </h1>
      <ul className='header__nav'>
        <li className='header__nav-item'>
          <Link href='/about'>Om oss</Link>
        </li>
        <li className='header__nav-item'>Kontakta oss</li>
        <li className='header__nav-item'>
          <Link href='/guestbook'>Gästboken</Link>
        </li>
        <li className='header__nav-item'>Bokade tider</li>
        <li className='header__nav-item'>Galleri</li>
      </ul>
    </header>
  )
}

export default TopNavbar
