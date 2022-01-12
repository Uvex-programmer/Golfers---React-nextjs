import React, { useState } from 'react'
import Link from 'next/link'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

const TopNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const Menu = () => {
    return (
      <>
        <li className='header__nav-item'>
          <Link href='/about'>Om oss</Link>
        </li>
        <li className='header__nav-item'>Kontakta oss</li>
        <li className='header__nav-item'>
          <Link href='/guestbook'>Gästboken</Link>
        </li>
        <li className='header__nav-item'>Bokade tider</li>
        <li className='header__nav-item'>Galleri</li>
      </>
    )
  }

  return (
    <header className='header'>
      <h1 className='header__logo'>
        <Link href='/'>Golfers</Link>
      </h1>
      <ul className='header__nav'>
        <Menu />
      </ul>

      <div className='header__nav-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        {toggleMenu && (
          <div className='header__nav-menu--container'>
            <ul className='header__nav header__nav-menu--list'>
              <Menu />
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default TopNavbar
