'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useRef , useState } from 'react';

export default function EnterOTP() {
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get('phone') || '';
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(32);

  const inputsRef = useRef <(HTMLInputElement | null) []> ([]);

  const isOtpComplete = otp.every((digit) => digit !== '');

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Clear error on any change
    if (error) setError('');

    if (value && index < otp.length - 1) {
    inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
  if (e.key === 'Backspace' && !otp[index] && index > 0) {
    inputsRef.current[index - 1]?.focus();
  }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');
    if (code === '553258') {
      router.push('/auth/otp-success');
    } else {
      setError('OTP is invalid. Please check and try again.');
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const t = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [timer]);

  
  useEffect(() => {
  const firstEmptyIndex = otp.findIndex((digit) => digit === '');
  if (firstEmptyIndex !== -1) {
    inputsRef.current[firstEmptyIndex]?.focus();
  }
  }, []);


  const handleResendOTP = () => {
  // Simulate API call or logic to resend the OTP
  console.log('Resending OTP to:', phone);

  // Reset timer
  setTimer(32);

  // Optionally reset OTP input
  setOtp(Array(6).fill(''));
  setError('');
  };


  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData('Text').trim();
    if (/^\d{6}$/.test(pasteData)) {
      const digits = pasteData.split('');
      setOtp(digits);
      digits.forEach((digit, idx) => {
        if (inputsRef.current[idx]) {
          inputsRef.current[idx]!.value = digit;
        }
      });
      // Move focus to the last input
      inputsRef.current[5]?.focus();
      e.preventDefault();
    }
  };





  return (
    
    <div className='flex items-center justify-center w-[100vw] h-[100vh] bg-[#daf3f6]'>
        <div className="w-[42%] h-[90%] flex flex-col justify-center items-center bg-white rounded-[16px] py-[44px] px-[60px] gap-4">

          <div className='w-[68px] h-[55px]'>
            <img src="/images/logo.png" alt="logo" />
          </div>

          <div className='flex flex-col items-start w-full gap-3 mb-2'>
            <img src="/icons/back-icon.svg" alt="back-icon" />
            <h1 className="text-[24px] font-bold text-center text-gray-900" >Verify your phone number</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full h-[80%]">

            <div className='h-[60%]'>

              <h3 className='text-[18px] font-semibold text-[#211028]'>Enter OTP</h3>
            
              <p className="text-[13px] text-[#332E30] mb-5">
              Enter the code that we have sent at <strong>+92 {phone}</strong>
              </p>

              <div className="flex justify-center space-x-2 mb-10">
                {otp.map((digit, idx) => (
                  <input
                    ref={(el) => (inputsRef.current[idx] = el)}
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    onPaste={handlePaste}
                    className="w-10 h-12 text-center border border-[#ababab] rounded-[8px]"
                  />
                ))}
              </div>

              {error && <p className="text-[#B42318] text-[13px] text-center mb-2">{error}</p>}

              <div onClick={timer === 0 ? handleResendOTP : undefined}
                className={`text-[14px] text-center mb-12
                  ${timer === 0 ? 'text-[#0B7285] cursor-pointer' : 'text-[#727C88]'}`}
              >
                {timer === 0 ? 'Resend OTP' : `Resend OTP in ${timer}s`}
              </div>
            </div>

            
            
            
            <button disabled={!isOtpComplete} type="submit" className={`text-[14px] rounded-[99px] h-[40px] w-full ${otp.join('').length === 6 ?'bg-[#0B7285] text-[#F4F6F9] cursor-pointer' : 'bg-[#E4E8EC] text-[#727C88]' }`}>
              Verify Phone Number
            </button>
              
          </form>

        </div>
    </div>
  );
}
