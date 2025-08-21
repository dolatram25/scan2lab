import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <div className="bg-[#daf3f6] flex flex-col items-center justify-center gap-12 px-4 py-12">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[24px] sm:text-[32px] tracking-[-0.02em] font-bold text-gray-900">
          Testimonials
        </h2>
        <p className="text-[#535862]">
          Hear first-hand from our incredible community of customers.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full max-w-[1200px]">
        <TestimonialCard TTitle='Great job, scan2lab!' TDescription='Highly recommended client, and I hope to collaborate again.' TName='Olly Schroeder' TDesignation='Designer, Nietzsche' TImage='/images/person1.png' AltText='Person1'/>
        <TestimonialCard TTitle='Amazing, scan2lab!' TDescription='Highly satisfied with this, and I love to work with them again.' TName='Caitlyn King' TDesignation='COO, OdeaoLabs' TImage='/images/person2.png' AltText='Person2'/>
        <TestimonialCard TTitle='Excellent job, scan2lab!' TDescription='They are amazing to work with. Extremely highly recommended!' TName='Sienna Hewitt' TDesignation='Project Manager, Warpspeed' TImage='/images/person3.png' AltText='Person3'/>
        <TestimonialCard TTitle='Amazing, scan2lab!' TDescription='Highly satisfied with this, and I love to work with them again.' TName='Caitlyn King' TDesignation='COO, OdeaoLabs' TImage='/images/person2.png' AltText='Person2'/>
        <TestimonialCard TTitle='Excellent job, scan2lab!' TDescription='They are amazing to work with. Extremely highly recommended!' TName='Sienna Hewitt' TDesignation='Project Manager, Warpspeed' TImage='/images/person3.png' AltText='Person3'/>
        <TestimonialCard TTitle='Great job, scan2lab!' TDescription='Highly recommended client, and I hope to collaborate again.' TName='Olly Schroeder' TDesignation='Designer, Nietzsche' TImage='/images/person1.png' AltText='Person1'/>
      </div>
    </div>
  );
};

export default Testimonials;
