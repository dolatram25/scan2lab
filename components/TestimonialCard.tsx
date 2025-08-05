import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div className='flex flex-col gap-4 bg-[#FFFFFF] p-[16px] rounded-[12px] border border-transparent hover:border-[#91bcf4] hover:border-[1px] transition-all duration-300'>
        <div className='flex flex-col gap-[6px] max-w-[90%]'>
            <h3 className='text-[14px] font-semibold'>{props.TTitle}</h3>
            <p className='text-[13px] text-[#2E3032]'>{props.TDescription}</p>
        </div>
      
        <div className='flex items-center gap-3'>
            <div className='w-[32px] h-[32px] bg-[#DDD0BE] rounded-full border border-[rgba(0,0,0,0.08)] overflow-hidden'>
                <img src={props.TImage} alt={props.AltText} />
            </div>

            <div className='flex flex-col'>
                <div className='flex gap-[4px] items-center'>
                    <h3 className='text-[14px] font-semibold'>{props.TName}</h3>
                    <img className='w-[16px] h-[16px]' src="/icons/verified-tick.svg" alt="verified-tick" />
                </div>

                <p className='text-[13px] text-[#2E3032]'>{props.TDesignation}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard
