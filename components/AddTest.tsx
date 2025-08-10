'use client';

import React from 'react';
import { useTestContext } from '@/context/TestContext';

interface AddTestProps {
  id: string;
  code: string;
  name: string;
}

const AddTest: React.FC<AddTestProps> = ({ id, code, name }) => {
  const { addTest, isTestAdded } = useTestContext();
  const alreadyAdded = isTestAdded(id);

  return (
    <div className='flex justify-between bg-[#FFFFFF] p-4 border-b border-b-[#cacaca]'>
      <div className='text-[#101A28] flex flex-col items-start'>
        <h2 className='text-[14px] font-normal'>{code}</h2>
        <p className='text-[12px]'>{name}</p>
      </div>

      <button
        onClick={() => addTest({ id, code, name })}
        disabled={alreadyAdded}
        className={`border rounded-[99px] border-[#c9cdcd] py-[8px] px-[10px] text-[14px] w-[100px] ${
          alreadyAdded ? 'bg-gray-200 text-gray-600 cursor-default' : 'cursor-pointer'
        }`}
      >
        {alreadyAdded ? 'Test Added' : 'Add Test'}
      </button>
    </div>
  );
};

export default AddTest;
