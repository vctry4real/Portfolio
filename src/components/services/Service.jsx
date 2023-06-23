import React from 'react'
import './Service.css'
import {BiCheck} from 'react-icons/bi'

function Service() {
  return (
    <section id='service'>
      <h5>The services i offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='services'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User-Centric Design.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Visual Design Skills</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Prototyping and Wireframing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Interaction Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaboration and Communication:</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}

        <article className='services'>
          <div className='service__head'>
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Web Design.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>User Experience (UX).</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Performance Optimization.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Frontend Frameworks/Libraries.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Debugging and Problem-Solving.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Web Design.</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}

        <article className='services'>
          <div className='service__head'>
            <h3>CONTENT CREATION</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creativity</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Strategy</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Visual Communication</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Basic Graphic Design Skills</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Savviness</p>
            </li>

          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}

      </div>
    </section>
  )
}

export default Service