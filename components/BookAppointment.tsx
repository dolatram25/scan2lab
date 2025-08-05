"use client";

import { useRef, useState } from "react";

const BookAppointment = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");


  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const openDatePicker = () => {
    inputRef.current?.showPicker(); // Manually trigger it
  };

  
  return (
    <div className='h-[790px] bg-white flex items-center justify-center'>
      <div className='bg-[#daf3f6] px-[60px] py-[44px] flex flex-col gap-12 rounded-[16px] w-[672px]'>
        <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
                <img src="/icons/home-line.svg" alt="home-line" />
                <img src="/icons/chevron-right.svg" alt="chevron-right" />
                <p className='text-[14px] text-[#717680] font-semibold'>Upload Tests</p>
                <img src="/icons/chevron-right.svg" alt="chevron-right" />
                <p className='text-[14px] text-[#717680] font-semibold'>...</p>
                <img src="/icons/chevron-right.svg" alt="chevron-right" />
                <p className='text-[14px] text-[#0B7285] font-semibold'>Appointment</p>
            </div>
            <h2 className='text-[32px] tracking-[-0.04em] font-semibold text-[#211028]'>Book Appointment</h2>
        </div>
        
        <div className='flex flex-col gap-4 mb-2'>
            <form action="" className='flex gap-4 w-[100%]'>
                <div className='flex flex-col'>
                    <label htmlFor="Pname" className='text-[14px] font-semibold mb-1'>Patient Name<span className='text-[#B42318]'>*</span></label>
                    <input id='Pname' type="text" placeholder='Zuraiz' className='bg-white border border-[#E4E7EC] w-[270px] h-[48px] px-4 py-2 rounded-[8px] placeholder-[#98A3B3]'/>
                </div>
                
                <div className='flex flex-col'>

                    <label htmlFor="date" className='text-[14px] font-semibold mb-1'>Date<span className='text-[#B42318]' >*</span></label>
                    
                    <div className="relative w-72">
                        {/* Invisible input */}
                        <input
                            ref={inputRef}
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0"
                        />

                        {/* Visible input container */}
                        <div className="flex items-center justify-between bg-white border border-[#E4E7EC] w-[270px] h-[48px] px-4 py-2 rounded-[8px]">
                            <span className={`${selectedDate ? "text-black" : "text-[#98A3B3]"}`}>
                                {selectedDate
                                    ? new Date(selectedDate).toLocaleDateString()
                                    : "Select Date"}
                            </span>

                            {/* Only this triggers the picker */}
                            <img
                            src="/icons/date-icon.svg"
                            alt="calendar-icon"
                            className="w-5 h-5 cursor-pointer"
                            onClick={openDatePicker}
                            />
                        </div>
                    </div>

                </div>
                
            </form>

            <form action="" className='flex gap-4 w-[100%]'>
                <div className='flex flex-col'>
                    <label className='text-[14px] font-semibold mb-2'>Select a time slot<span className='text-[#B42318]'>*</span></label>
                    <div className='grid grid-cols-2 gap-[8px]'>
                        <p className='bg-white text-[14px] text-[#1C1C1C] px-[24px] py-[8px] rounded-[60px] hover:cursor-pointer'>12:00 PM to 12:30 PM</p>
                        <p className='bg-white text-[14px] text-[#1C1C1C] px-[24px] py-[8px] rounded-[60px] hover:cursor-pointer'>12:30 PM to 01:00 PM</p>
                        <p className='bg-white text-[14px] text-[#1C1C1C] px-[24px] py-[8px] rounded-[60px] hover:cursor-pointer'>01:00 PM to 01:30 PM</p>
                        <p className='bg-white text-[14px] text-[#1C1C1C] px-[24px] py-[8px] rounded-[60px] hover:cursor-pointer'>01:30 PM to 2:00 PM</p>
                        <p className='bg-white text-[14px] text-[#1C1C1C] px-[24px] py-[8px] rounded-[60px] hover:cursor-pointer'>2:00 PM to 2:30 PM</p>
                        <p className='bg-white text-[14px] text-[#1C1C1C] px-[24px] py-[8px] rounded-[60px] hover:cursor-pointer'>2:30 PM to 03:00 PM</p>
                    </div>
                </div>
                
                
            </form>
        </div>

        <button type="submit" className=' bg-[#0B7285] text-[14px] text-[#F4F6F9] rounded-[99px] h-[48px] cursor-pointer'>
            Book Appointment
        </button>
            
      </div>
    </div>
  )
}

export default BookAppointment
