import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export const HeaderMain = () => {
  return (
    <div className='border-b border-gray-200 py-6'>
    <div className='container sm:flex justify-between items-center'>
        <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish'>eCOM</div>
        <div className='w-full sm:w-[300px] md:w-[70%] relative'>
            <input
                className='w-full border-gray-200 border p-2 px-4 rounded-lg'
                type='text'
                // value={searchInput}
                placeholder='Enter any product name...'    
            />
            <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20}/>
        </div>
        <div className='hidden lg:flex text-gray-500 text-[30px] gap-4'>
            <BiUser />
            <div className='relative'>
                <FiHeart />
                <div className='absolute right-0 top-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center bg-red-600 rounded-full translate-x-1 -translate-y-1'>0</div>
            </div>
            <div className='relative'>
                <HiOutlineShoppingBag />
                <div className='absolute right-0 top-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center bg-red-600 rounded-full font-bold translate-x-1 -translate-y-1'>1</div>
            </div>
        </div>  
    </div>
    </div>
  )
}
