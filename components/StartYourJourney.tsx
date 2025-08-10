"use client"

import React, { useState } from 'react'
import AddTest from './AddTest'
import { useRouter } from 'next/navigation';



interface Test {
  id: string
  code: string
  name: string
}

const StartYourJourney = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // Sample test data - you can replace this with your actual data
  const allTests: Test[] = [
    { id: '1', code: 'H1ABC', name: 'Diabetes Test' },
    { id: '2', code: 'H2DEF', name: 'Cholesterol Test' },
    { id: '3', code: 'H3GHI', name: 'Blood Pressure Test' },
    { id: '4', code: 'H4JKL', name: 'Thyroid Function Test' },
  ]

  // Filter tests based on search term
  const filteredTests = allTests.filter(test => 
    test.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const router = useRouter();

  return (
    <div className='flex items-center justify-center bg-[#daf3f6] h-[605px]'>
        <div className='flex items-center justify-center flex-col gap-2 w-[672px] text-center'>
            <h1 className='text-[32px] text-[#211028] w-full mb-4 font-semibold tracking-[-0.02em]'>Start your journey with scan2lab</h1>

            <div className="bg-white flex gap-4 items-center border border-[#EDEDED] rounded-[99px] px-[14px] py-[10px] w-[100%] h-[48px]">
                <img src="/icons/search.svg" alt="search-icon" className="w-[16.9px] h-[16.9px]" />
                <input 
                  type="text" 
                  className="extext-[#383838] text-[14px] placeholder-[#383838] focus:outline-none flex-1" 
                  placeholder="Search for tests"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
            </div>

            <div className='rounded-[8px] overflow-hidden w-full'>
              {searchTerm && filteredTests.map(test => (
                <AddTest key={test.id} id={test.id} code={test.code} name={test.name} />
              ))}
              {filteredTests.length === 0 && searchTerm && (
                <div className='bg-white p-4 text-[#666] text-[14px]'>
                  No tests found matching "{searchTerm}"
                </div>
              )}
            </div>


            <button
              type="button"
              onClick={() => router.push('/lab-tests')}
              className='flex items-center justify-center gap-[8px] w-full bg-[#0B7285] text-[14px] text-[#F4F6F9] rounded-[99px] h-[48px] mt-1 cursor-pointer'
            >
              <span>View Added Tests</span>
              <img src="/icons/right-icon.svg" alt="right-icon" />
            </button>


        </div>
    </div>
  )
}

export default StartYourJourney