import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className='h-[654px] bg-[#daf3f6] flex flex-col items-center justify-center gap-[64px]'>
      <div className='flex flex-col items-center'>
        <h2 className="text-[32px] tracking-[-0.02em] font-bold text-gray-900">Testimonials</h2>
        <p className='text-[#535862]'>Hear first-hand from our incredible community of customers.</p>
      </div>

      <div className='grid grid-cols-3 grid-rows-2 gap-[24px] px-20'>
        <TestimonialCard TTitle='Great job, scan2lab!' TDescription='Highly recommended client, and I hope to collaborate again.' TName = 'Olly Schroeder' TDesignation = 'Designer, Nietzsche' TImage = '/images/person1.png' AltText = 'Person1'/>
        <TestimonialCard TTitle='Amazing, scan2lab!' TDescription='Highly satisfied with this, and I love to work with them again.' TName = 'Caitlyn King' TDesignation = 'COO, OdeaoLabs' TImage = '/images/person2.png' AltText = 'Person2'/>
        <TestimonialCard TTitle='Excellent job, scan2lab!' TDescription='They are amazing to work with. Extremely highly recommended!' TName = 'Sienna Hewitt' TDesignation = 'Project Manager, Warpspeed' TImage = '/images/person3.png' AltText = 'Person3'/>
        <TestimonialCard TTitle='Amazing, scan2lab!' TDescription='Highly satisfied with this, and I love to work with them again.' TName = 'Caitlyn King' TDesignation = 'COO, OdeaoLabs' TImage = '/images/person2.png' AltText = 'Person2'/>
        <TestimonialCard TTitle='Excellent job, scan2lab!' TDescription='They are amazing to work with. Extremely highly recommended!' TName = 'Sienna Hewitt' TDesignation = 'Project Manager, Warpspeed' TImage = '/images/person3.png' AltText = 'Person3'/>
        <TestimonialCard TTitle='Great job, scan2lab!' TDescription='Highly recommended client, and I hope to collaborate again.' TName = 'Olly Schroeder' TDesignation = 'Designer, Nietzsche' TImage = '/images/person1.png' AltText = 'Person1'/>
      </div>
    </div>
  )
}

export default Testimonials
