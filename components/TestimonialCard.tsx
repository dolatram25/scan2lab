import React from 'react';

const TestimonialCard = (props: any) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-[12px] border border-transparent hover:border-[#91bcf4] hover:border-[1px] transition-all duration-300">
      {/* Text */}
      <div className="flex flex-col gap-[6px]">
        <h3 className="text-[14px] font-semibold">{props.TTitle}</h3>
        <p className="text-[13px] text-[#2E3032]">{props.TDescription}</p>
      </div>

      {/* Person */}
      <div className="flex items-center gap-3">
        <div className="w-[32px] h-[32px] bg-[#DDD0BE] rounded-full border border-[rgba(0,0,0,0.08)] overflow-hidden flex-shrink-0">
          <img src={props.TImage} alt={props.AltText} className="w-full h-auto" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-[4px] items-center">
            <h3 className="text-[14px] font-semibold">{props.TName}</h3>
            <img className="w-[16px] h-[16px]" src="/icons/verified-tick.svg" alt="verified-tick" />
          </div>
          <p className="text-[13px] text-[#2E3032]">{props.TDesignation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
