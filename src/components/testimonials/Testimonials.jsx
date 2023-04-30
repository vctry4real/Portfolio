import React from 'react'
import './Testimonials.css'
import A from '../../assets/A.jpg'
import A1 from '../../assets/A1.jpg'
import A2 from '../../assets/A2.jpg'
import A3 from '../../assets/A3.jpg'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar:A,
    name: "Tina snow",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia dolore numquam voluptatibus suscipit at soluta animi aperiam doloremque, architecto accusamus nemo, vero, ducimus tempora eveniet recusandae deleniti? Eligendi temporibus magni quod iusto veritatis sint at eum suscipit.',

  },

  {
    avatar:A1,
    name: "Angel Reese",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia dolore numquam voluptatibus suscipit at soluta animi aperiam doloremque, architecto accusamus nemo, vero, ducimus tempora eveniet recusandae deleniti? Eligendi temporibus magni quod iusto veritatis sint at eum suscipit.',

  },

  {
    avatar:A2,
    name: "Mia Tunner",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia dolore numquam voluptatibus suscipit at soluta animi aperiam doloremque, architecto accusamus nemo, vero, ducimus tempora eveniet recusandae deleniti? Eligendi temporibus magni quod iusto veritatis sint at eum suscipit.',

  },

  {
    avatar:A3,
    name: "Molly Jane",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia dolore numquam voluptatibus suscipit at soluta animi aperiam doloremque, architecto accusamus nemo, vero, ducimus tempora eveniet recusandae deleniti? Eligendi temporibus magni quod iusto veritatis sint at eum suscipit.',

  },
]

const Testimonials = () => {

   return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
          data.map(({avatar, name, review},index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt="A"/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide> 
            )
          })
        }

       

        
      </Swiper>
    </section>
  )
}

export default Testimonials