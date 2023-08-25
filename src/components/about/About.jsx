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
              <small>4+ years working Experience</small>
            </article>

            <article className='about__article__card'>
              <HiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>3 clients</small>
            </article>

            <article className='about__article__card'>
              <AiFillFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>4 projects </small>
            </article>
          </div>

          <p>
          I am an expert web developer, I have honed my skills and expertise to help businesses achieve their goals and objectives.I am web developer who is willing to go above and beyond on any project. As a web developer, I have a deep understanding of various programming languages such as HTML, CSS, JavaScript, and PHP. I am proficient in using frameworks like React and CMS platforms like codux. My technical knowledge and experience enable me to develop responsive and dynamic websites that deliver exceptional user experiences.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About