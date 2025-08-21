import React from 'react';

const BookedAppointment = (props: any) => {
  return (
    <div className="bg-white w-full rounded-[12px] flex flex-col p-4 gap-3 shadow-sm">
      <div className="flex items-center justify-between">
        <p
          className="text-[12px] sm:text-[13px] font-medium py-[2px] px-[8px] rounded-[16px]"
          style={{ color: props.apptColor, backgroundColor: props.apptBgColor }}
        >
          {props.appointmentType}
        </p>
        <img
          src="/icons/dots-icon.svg"
          alt="dots"
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
      </div>

      <h3 className="text-[14px] sm:text-[15px] font-semibold">
        Chugtai Lab, Nishtar Road
      </h3>

      <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
        <div className="flex gap-1 items-center">
          <img
            src="/icons/watch-icon.svg"
            alt="watch-icon"
            className="w-4 h-4"
          />
          <p className="text-[12px]">5:45 PM</p>
        </div>
        <div className="flex gap-1 items-center">
          <img
            src="/icons/calender-icon.svg"
            alt="calender-icon"
            className="w-4 h-4"
          />
          <p className="text-[12px]">03 Mar 2025</p>
        </div>
      </div>
    </div>
  );
};

export default BookedAppointment;
