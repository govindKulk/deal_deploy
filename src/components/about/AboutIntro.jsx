import React from 'react'

// images
import teamBg from '../../../public/about-us/team.jpg'
import Image from 'next/image'

const AboutIntro = () => {
  return (
    <div className={`flex flex-col lg:flex-row gap-16 justify-between items-center `}>
      <div>
        <p className='font-medium text-xl text-justify'>
        <span className='text-4xl font-bold whitespace-pre'>
            Deal Acres{"   "}
        </span>
         was established with a vision to help people find the right investment opportunity in the Gurugram and Delhi NCR region. By combining deep market knowledge and the foresight that comes from experience, our integrated team of Consultants and property Experts assists you in making the best decisions possible. 

        </p>

        <div className='w-3/4 h-0.5 bg-black my-4 '></div>

        <p className='text-lg'>
        Deal Acres is India’s most innovative real estate advertising platform for homeowners, landlords, developers, and real estate brokers. Each member of the team is dedicated to providing Residential property services to our clients that are tailored to their individual needs and goals, resulting in a unique experience for each of them.

        </p>

      </div>

      <div className='lg:min-w-[40%]  -order-1 lg:order-1'>
        <Image src={teamBg} alt='Team Image' className='w-full h-full' />
      </div>
    </div>
  )
}

export default AboutIntro
