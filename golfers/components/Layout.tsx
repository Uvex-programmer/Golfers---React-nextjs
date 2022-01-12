import React from 'react'
import Header from './header/Header'

const Layout = (props: any) => {
  return (
    <div className='container'>
      <Header />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
