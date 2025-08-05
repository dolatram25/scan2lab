// components/LabTests.tsx

export default function LabTests() {
  return (
    <div className="w-[100vw] h-[600px] flex justify-center items-center">
      <div className="w-[50%] bg-[#daf3f6] px-[60px] py-[44px] rounded-[16px]">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Lab Tests</h2>

        {/* Test 1 - H1ABC */}
        <div className="bg-white p-4 rounded-xl mb-3 shadow-sm flex flex-col">
          <div className="flex justify-between items-center">
            <div className="w-full flex items-center gap-2">

              <div className="bg-[#CFE8F1] w-[32px] h-[32px] flex justify-center items-center rounded-[8px]">
                <img src="/icons/clipboard-icon.svg" alt="Clipboard Icon" className="w-5 h-5" />
              </div>

              <div className="w-full flex flex-col">
                <div className="w-full flex justify-between">
                  <p className="font-semibold text-sm">H1ABC</p>
                  <div className="cursor-pointer"> <img src="/icons/dots-icon.svg" alt="dots" /></div>
                </div>

                <p className="text-[13px] font-medium text-[#98A3B3]">Diabetes Test</p>
                
              </div>
              
            </div>
            
          </div>

          <div className="mt-3 bg-[#E6F6F7] text-[14px] text-[#121212] p-4 rounded-[12px]">
            Keep yourself hydrated and visit empty stomach for this test.
          </div>
        </div>

        {/* Test 2 - H1ACB */}
        <div className="bg-white p-4 rounded-xl mb-3 shadow-sm flex flex-col">
          <div className="flex justify-between items-center">
            <div className="w-full flex items-center gap-2">

              <div className="bg-[#EFD4D6] w-[32px] h-[32px] flex justify-center items-center rounded-[8px]">
                <img src="/icons/droplet-icon.svg" alt="Droplet Icon" className="w-5 h-5" />
              </div>

              <div className="w-full flex flex-col">
                <div className="w-full flex justify-between">
                  <p className="font-semibold text-sm">H1ACB</p>
                  <div className="cursor-pointer"> <img src="/icons/dots-icon.svg" alt="dots" /></div>
                </div>

                <p className="text-[13px] font-medium text-[#98A3B3]">Blood Count Test</p>
                
              </div>
              
            </div>
            
          </div>

        </div>

        {/* Add Another */}
        <div className="bg-white flex justify-center items-center gap-[8px] p-4 mb-5 text-center text-[16px] font-medium text-[#211028] border border-[#E4E8EC] rounded-[12px] cursor-pointer">
          <img src="/icons/plus-icon.svg" alt="plus-icon" />
          <span>Add another perscription</span>
        </div>

        {/* Button */}
        <button type="submit" className='flex items-center justify-center gap-[8px] w-full bg-[#0B7285] text-[14px] text-[#F4F6F9] rounded-[99px] h-[48px] mt-1 cursor-pointer'>
            <span>View Labs</span> <img src="/icons/right-icon.svg" alt="right-icon" />
        </button>
      </div>
    </div>
    
  );
}
