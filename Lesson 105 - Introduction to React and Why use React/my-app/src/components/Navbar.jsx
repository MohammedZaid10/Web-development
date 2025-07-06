import React from 'react'
import Footer from './Footer'

const Navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
        <ol>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
        </ol>
        <Footer/>
    </div>
  )
}

export default Navbar