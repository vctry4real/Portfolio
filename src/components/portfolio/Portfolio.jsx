import React from 'react';
import './Portfolio.css';
import enrichmatic from '../../assets/enrichmatic.png'
import newkindred from '../../assets/newkindred.png'
import protomated from '../../assets/protomated.png'
import eazysites from '../../assets/eazysites.png'
import treasures from '../../assets/treasures.png'

const data = [
  {
    id: 1,
    image: enrichmatic,
    title: "Enrichmatic",
    // github: 'https://github.com/vctry4real/Hostels',
    view: 'https://enrichmatic.com/'
  },

  {
    id: 2,
    image: newkindred,
    title: "Newkindred.com ",
    // github: 'https://github.com/vctry4real/blockchain-ecommerce',
    view: 'https://newkindred.com/'
  },

  {
    id: 3,
    image: protomated,
    title: "Protomated",
    // github: 'https://github.com/vctry4real/foodApp',
    view: 'https://protomated.com/'
  },

  {
    id: 4,
    image: eazysites,
    title: "Eazysites (Landing page)",
    //github: 'https://github.com/vctry4real/svenix',
    view: 'https://eazysites.vercel.app/'
  },
  {
    id: 5,
    image: treasures,
    title: "Treasures",
    //github: 'https://github.com/vctry4real/svenix',
    view: 'https://treasuresapp.vercel.app/'
  }
]

function Portfolio() {

  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, view }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  {/* <a href={github} className='btn' target='_blank'>Github</a> */}
                  <a href={view} className='btn btn-primary' target='_blank'>Live view</a>
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