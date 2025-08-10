'use client';

import { useTestContext } from '@/context/TestContext';

export default function LabTests() {
  const { addedTests } = useTestContext();

  return (
    <div className="w-[100vw] h-[600px] flex justify-center items-center">
      <div className="w-[50%] bg-[#daf3f6] px-[60px] py-[44px] rounded-[16px]">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Lab Tests</h2>

        {addedTests.length === 0 && (
          <p className="text-gray-500 text-sm">No tests added yet.</p>
        )}

        {addedTests.map((test) => (
          <div key={test.id} className="bg-white p-4 rounded-xl mb-3 shadow-sm flex flex-col">
            <div className="flex justify-between items-center">
              <div className="w-full flex items-center gap-2">
                <div className="bg-[#CFE8F1] w-[32px] h-[32px] flex justify-center items-center rounded-[8px]">
                  <img src="/icons/clipboard-icon.svg" alt="Clipboard Icon" className="w-5 h-5" />
                </div>
                <div className="w-full flex flex-col">
                  <div className="w-full flex justify-between">
                    <p className="font-semibold text-sm">{test.code}</p>
                    <div className="cursor-pointer">
                      <img src="/icons/dots-icon.svg" alt="dots" />
                    </div>
                  </div>
                  <p className="text-[13px] font-medium text-[#98A3B3]">{test.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="flex items-center justify-center gap-[8px] w-full bg-[#0B7285] text-[14px] text-[#F4F6F9] rounded-[99px] h-[48px] mt-1 cursor-pointer"
        >
          <span>View Labs</span> <img src="/icons/right-icon.svg" alt="right-icon" />
        </button>
      </div>
    </div>
  );
}
