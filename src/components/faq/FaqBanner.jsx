import Image from 'next/image'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
const FaqBanner = ({
    img
}) => {
    return (
        <div className=' relative min-h-[350px] max-h-[500px]  flex items-center justify-center'>
            <Image src={img} alt='Question Mark Image.' className='
      object-cover
      absolute
      w-full
      h-full
      '/>

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 px-4-translate-y-1/2 flex flex-col '>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold py-4'>Hey, how can we help?</h1>

                <div className='relative'>
                    <span className='absolute 
                    p-1 inset-y-1/2 -translate-y-1/2 left-2 w-[30px] h-[30px]
                    flex items-center justify-center
                    pointer-events-none z-10 bg-blue-600 rounded-full text-white  '>
                        <FiSearch size={20} />

                    </span>
                    <input type="text" placeholder='Search By Keyword'
                        className='w-full py-[16px] pl-[50px] text-sm rounded-xl shadow-lg' />

                </div>

            </div>


        </div>
    )
}

export default FaqBanner
