import React from 'react'
import Victory_Johnson from '../../assets/Victory Johnson - web developer.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Victory_Johnson} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>let's talk</a>
    </div>
  )
}

export default CTA