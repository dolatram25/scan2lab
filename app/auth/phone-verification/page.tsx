'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PhoneVerification() {

  const router = useRouter();
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim().length === 10) {
      router.push(`/auth/enter-otp?phone=${encodeURIComponent(phone)}`);
    }
    else (alert("The phone number should only consist of 10 digits."))
  };

  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh] bg-[#daf3f6]'>
        <div className="w-[42%] h-[90%] flex flex-col justify-center items-center bg-white rounded-[16px] py-[44px] px-[60px] gap-4">

          <div className='w-[68px] h-[55px]'>
            <img src="/images/logo.png" alt="logo" />
          </div>

          <div className='flex flex-col items-start w-full gap-3 mb-2'>
            <img src="/icons/back-icon.svg" alt="back-icon" />
            <h1 className="text-[24px] font-bold text-center text-gray-900">Verify your phone number</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full h-[80%]">

            <div className='h-[60%]'>
                <h3 className='text-[14px] font-semibold text-[#211028] mb-3'>Enter Phone Number</h3>

                <div className='flex gap-1 mb-3'>

                  <div className="relative h-[40px] w-[120px] flex items-center gap-1 rounded-[8px] border border-[#ccced2] py-[10px] px-[12px]">
                    
                    <img src="/icons/flag.svg" alt="flag" className='w-[20px] h-[14px] border border-gray-400' />
                    
                    <select name="country-code" id="country-code" className="appearance-none pr-6 bg-transparent">
                      <option value="India">+91</option>
                      <option value="Pakistan">+92</option>
                      <option value="England">+93</option>
                    </select>

                    <div
                      className="absolute pointer-events-none right-[12px] top-1/2 -translate-y-1/2 w-4 h-4"
                      style={{
                        backgroundImage: "url('/icons/dropdown2.svg')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                      }}
                    >
                    </div>
                  </div>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="xxx xxxxxxx"
                    className="w-full h-[40px] flex items-center gap-1 rounded-[8px] border border-[#ccced2] py-[10px] px-[12px]"
                    required
                  />

                </div>

                <label className="flex items-center space-x-2 cursor-pointer mb-12">

                  <input type="checkbox" className="peer hidden" />

                  <div className="w-4 h-4 rounded-[3px] border border-gray-400 
                                  peer-checked:bg-[#0B7285] peer-checked:border-transparent 
                                  flex items-center justify-center
                                  peer-checked:[&>img]:block">
                    <img
                      src="/icons/check-icon.svg"
                      alt="check"
                      className="w-3 h-3 hidden"
                    />
                  </div>

                  <span className="text-[13px] text-black">Remember this device</span>

                </label>
            </div>

            <button type="submit" className='bg-[#0B7285] text-[14px] text-[#F4F6F9] rounded-[99px] h-[40px] w-full cursor-pointer'>
              Send OTP
            </button>
              
          </form>

        </div>
    </div>
    
  );
}
