import React from 'react'
import BookedAppointment from './BookedAppointment'

const MyAppointments = () => {
  return (
    <div className='h-[790px] bg-white flex items-center justify-center'>
      <div className='bg-[#daf3f6] px-[60px] py-[44px] flex flex-col gap-6 rounded-[16px] w-[672px]'>

        <div className='flex flex-col gap-3'>
            <h2 className='text-[32px] tracking-[-0.04em] font-semibold text-[#211028]'>My Appointments</h2>
        </div>
        
        <div className='flex flex-col gap-3'>
            <BookedAppointment appointmentType = 'Scheduled' apptColor = '#027A48' apptBgColor = '#ECFDF3'/>
            <BookedAppointment appointmentType = 'Rescheduled' apptColor = '#CE980F' apptBgColor = '#FFE7DC '/>
            <BookedAppointment appointmentType = 'Cancelled' apptColor = '#B42318' apptBgColor = '#FFE3E3'/>

        </div>
            
      </div>
    </div>
  )
}

export default MyAppointments
