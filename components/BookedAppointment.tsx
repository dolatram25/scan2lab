import React from 'react'

const BookedAppointment = (props) => {
  return (
    <div className='bg-white w-[552px] h-[125px] rounded-[12px] flex flex-col p-[16px] gap-3'>

      <div className='flex items-center justify-between'>
        <p className={`text-[12px] font-medium py-[2px] px-[8px] rounded-[16px]`}
        style={{ color: props.apptColor, backgroundColor: props.apptBgColor }}>
          {props.appointmentType}</p>
        <img src="/icons/dots-icon.svg" alt="dots" />
      </div>

      <h3 className='text-[14px] font-semibold'>Chugtai Lab, Nishtar Road</h3>

      <div className='flex gap-6 items-center'>
        <div className='flex gap-1 items-center'>
            <img src="/icons/watch-icon.svg" alt="watch-icon" />
            <p className='text-[12px]'>5:45 PM</p>
        </div>
        <div className='flex gap-1 items-center'>
            <img src="/icons/calender-icon.svg" alt="calender-icon" />
            <p className='text-[12px]'>03 Mar 2025</p>
        </div>
      </div>

    </div>
  )
}

export default BookedAppointment
