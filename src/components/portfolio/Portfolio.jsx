import React from 'react';
import './Portfolio.css';
import HostelDashboard from '../../assets/HostelDashboard.jpeg'
import Ecommerce from '../../assets/Ecommerce.png'
import foodApp from '../../assets/foodApp.jpeg'
import moniflex from '../../assets/moniflex.jpeg'

const data = [
  {
    id: 1,
    image: HostelDashboard,
    title: "Hostel Management System (complete)",
    github: 'https://github.com/vctry4real/Hostels',
    demo: 'https://vctry.youtrack.cloud/issue/PIHB-20/Hostel-Management-System'
  },

  {
    id: 2,
    image: Ecommerce,
    title: "Blockchain Ecommerce Store (complete)",
    github: 'https://github.com/vctry4real/blockchain-ecommerce',
    //demo: 'https://dribbble.com'
  },

  {
    id: 3,
    image: foodApp,
    title: "Food App (Frontend)",
    github: 'https://github.com/vctry4real/foodApp',
    //demo: 'https://dribbble.com'
  },

  {
    id: 4,
    image: moniflex,
    title: "MoniFlex Status : Under Development",
    github: 'https://github.com/vctry4real/svenix',
    //demo: 'https://dribbble.com'
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
                {/*<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>*/}
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