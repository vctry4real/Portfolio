import React from 'react'
import NewCV from '../../assets/NewCV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={NewCV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>let's talk</a>
    </div>
  )
}

export default CTA