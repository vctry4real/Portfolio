import React from 'react'
import './About.css'
import Me from '../../assets/Me.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {HiUsers} from 'react-icons/hi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='About Image' className='about__image'/>
          </div>
        </div>
  
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__article__card'>
              <BsAwardFill className='about_icon'/>
              <h5>Eperience</h5>
              <small>3+ years working Experience</small>
            </article>

            <article className='about__article__card'>
              <HiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>3 clients</small>
            </article>

            <article className='about__article__card'>
              <AiFillFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>6 projects </small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio illum perspiciatis ab impedit, a consectetur voluptatem molestiae ratione doloremque ullam dolorum quidem perferendis assumenda, amet expedita repudiandae tenetur porro debitis.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About