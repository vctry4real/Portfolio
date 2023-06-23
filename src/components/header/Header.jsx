import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/Me.jpg'
//import portimage from'../../assets/portimage.JPG'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello</h5>
        <h1>Johnson Victory</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className='me'>
          <img src={''} alt='' />
        </div>

        <a href="contact" className='scroll__down'>scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header