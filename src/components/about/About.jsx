import React from 'react'
import './About.css'
import Me from '../../assets/Me.jpg'
import { BsAwardFill } from 'react-icons/bs'
import { HiUsers } from 'react-icons/hi'
import { AiFillFolderOpen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='About Image' className='about__image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__article__card'>
              <BsAwardFill className='about_icon' />
              <h5>Eperience</h5>
              <small>3+ years working Experience</small>
            </article>

            <article className='about__article__card'>
              <HiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>7 clients</small>
            </article>

            <article className='about__article__card'>
              <AiFillFolderOpen className='about_icon' />
              <h5>Projects</h5>
              <small>10 projects </small>
            </article>
          </div>

          <p>
            Experienced Web Developer with a strong background in creating dynamic, responsive, and user-centric
            websites for businesses and brands. With over three years of expertise, I specialize in leveraging
            modern tools and frameworks like JavaScript, React.js, Next.js, WordPress, and no-code platforms to
            build digital solutions that enhance client engagement and drive conversions. Adept at collaborating
            with cross-functional teams, I excel in transforming complex requirements into seamless user experiences
            while delivering measurable results. Recognized for optimizing workflows, improving system performance,
            and contributing to the launch of impactful digital projects, I bring a proven track record of boosting
            online visibility and operational efficiency.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About