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
            <h3>Automation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Workflow Design.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Workflow Implementation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Task Automation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Bots</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Third-party API Integration</p>
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
              <p>SEO Optimization.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>No-code Web development.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Website Maintenance.</p>
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
              <p>Script Writing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Strategy</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Video Editing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Videography</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Roadmap Development</p>
            </li>

          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}

      </div>
    </section>
  )
}

export default Service