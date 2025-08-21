import React from 'react';

const HowItWorks = () => {
  const steps = [
    "Add prescription, or search tests you need to take.",
    "Select a lab nearby your location and schedule a convenient appointment.",
    "Get a Home appointment or Visit lab",
    "Review your experience"
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-12 lg:py-20">
      {/* Text Section */}
      <section className="max-w-xl lg:max-w-[449px]">
        <h2 className="text-[24px] sm:text-[32px] tracking-[-0.02em] font-bold text-gray-900 mb-8">
          How it works?
        </h2>
        <div className="relative border-l border-[#DAE3F0] pl-6 space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Circle */}
              <div className="absolute -left-8 top-1 w-[20px] h-[20px] rounded-full border-[5px] border-white bg-[linear-gradient(to_right,_#3E6F99,_#4E4376)]"></div>
              {/* Text */}
              <p className="text-[14px] sm:text-lg text-black">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Section */}
      <div className="w-full max-w-[632px] rounded-[24px] overflow-hidden">
        <img
          src="/images/image1.png"
          alt="image1"
          className="w-full h-auto hover:scale-105 duration-300 transition-all"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
