import React from 'react'

const HowItWorks = () => {

    const steps = [
    "Add prescription, or search tests you need to take.",
    "Select a lab nearby your location and schedule a convenient appointment.",
    "Get a Home appointment or Visit lab",
    "Review your experience"
  ];

  return (
    <div className='h-[656px] flex items-center justify-between'>
      <div className='w-[1216px] flex justify-between items-center'>
        <section className="max-w-4xl mx-auto px-6 py-16 rounded-xl w-[449px]">
            <h2 className="text-[32px] tracking-[-0.02em] font-bold text-gray-900 mb-8">How it works?</h2>
            
            <div className="relative border-l border-[#DAE3F0] pl-6 space-y-8">
                {steps.map((step, index) => (
                <div key={index} className="relative">
                    {/* Circle */}
                    <div className="absolute -left-8 top-1 w-[20px] h-[20px] rounded-full border-[5px] border-white bg-[linear-gradient(to_right,_#3E6F99,_#4E4376)]"></div>
                    {/* Text */}
                    <p className="text-lg text-black text-[14px]">{step}</p>
                </div>
                ))}
            </div>
        </section>

        <div className='w-[632px] rounded-[24px] overflow-hidden'>
            <img src="/images/image1.png" alt="image1" className='hover:scale-105 duration-300 transition-all'/>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
