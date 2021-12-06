import React from 'react'
import TopNavbar from './TopNavbar'

const Layout = (props: any) => {
  return (
    <div className='container'>
      <TopNavbar />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
