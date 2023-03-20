import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.jpg'
import IMG3 from '../../assets/IMG3.jpg'
import IMG4 from '../../assets/IMG4.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto currency dashboard and financial visualization",
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },

  {
    id: 1,
    image: IMG2,
    title: "dashboard visualization",
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },

  {
    id: 3,
    image: IMG3,
    title: "Crypto visualization",
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  },

  {
    id: 4,
    image: IMG4,
    title: "Data visualization",
    github: 'https://github.com',
    demo: 'https://dribbble.com'
  }
]

function Portfolio() {

  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
        </article>
            )
          })
        }


      </div>
    </section> 
  )
}

export default Portfolio