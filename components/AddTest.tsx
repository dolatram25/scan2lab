"use client"

import React from 'react'

interface AddTestProps {
  code: string
  name: string
}

const AddTest: React.FC<AddTestProps> = ({ code, name }) => {
  return (
    <div className='flex justify-between bg-[#FFFFFF] p-4 border-b border-b-[#cacaca]'>
      <div className='text-[#101A28] flex flex-col items-start'>
        <h2 className='text-[14px] font-normal'>{code}</h2>
        <p className='text-[12px]'>{name}</p>
      </div>

      <button id='TestButton' className='border rounded-[99px] border-[#c9cdcd] py-[8px] px-[10px] text-[14px] w-[93px] cursor-pointer'>Add Test</button>
    </div>
  )
}

export default AddTest


