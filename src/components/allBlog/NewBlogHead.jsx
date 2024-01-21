import Image from 'next/image'
import React from 'react'
import img from '../../../public/Bloghead.jpg'
import BlogHeadCard from './BlogHeadCard'
const NewBlogHead = () => {

  const colors = [
    'text-[#2CD3E1]',
    'text-[#D0F5BE]',
    'text-[#FEFF86]',
    'text-[#FFF2F2]'

  ]
  return (
    <div className='min-h-screen h-[1050px] overflow-hidden min-[680px]:h-[800px] md:h-[900px] lg:h-screen w-screen max-w-full relative after:absolute after:bg-black/40 after:w-full after:h-full after:left-0 text-white after:z-[7]  '>

      <div className='absolute w-full h-full z-[5] '>
        <Image src={img} alt={'Luxurious House'} className='w-full h-full object-cover' />

      </div>

      <div className=' absolute top-[80px] z-[8] w-full h-full px-4 py-8 flex flex-col gap-4  items-center'>
          <div className='text-xl py-4 inline font-bold self-start'>
            Information {' '} <span className='bg-white p-2 text-black text-2xl'> HUB</span>
          </div>

          <div className='flex justify-center self-stretch w-full'>
            <input type="text" placeholder='Search...' className='border border-white bg-transparent text-xl p-2 md:w-2/4 placeholder:text-white placeholder:font-bold ' />

          </div>

          <div className='text-2xl md:text-4xl font-medium py-4 text-center md:w-2/3 mx-auto'>
          Deal Acres is your ultimate destination for valuable insights and knowledge in the ever-evolving world of real estate. 
          </div>
          <div className=' md:text-4xl flex justify-center flex-wrap lg:flex-nowrap  gap-4 py-4  md:w-2/3 md:mx-auto overflow-scroll sm:overflow-hidden'>
            {
              [...Array(4)].map((_, index) => (<div className='w-[150px] md:w-[200px]' key={index}>
                    <BlogHeadCard title='Infocus Rera' 
                    description="Decoding the Real Estate (Regulation and Development) Act, 2016/"
                    color={colors[index]}
                    />
                  </div>)
                  )
            } 
          </div>
        </div>

    </div>
  )
}

export default NewBlogHead
