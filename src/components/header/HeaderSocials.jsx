import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub } from 'react-icons/fa'
import { FaDribbble } from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='www.linkedin.com/in/johnson-victory' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/vctry4real' target="_blank"><FaGithub/></a>
        <a href='https://dribbble.com' target="_blank"><FaDribbble/></a>
    </div>
  )
}

export default HeaderSocials