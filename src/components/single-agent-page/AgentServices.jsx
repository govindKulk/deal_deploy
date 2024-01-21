'use client'
import React from 'react'
import HeadingBorder from './HeadingBorder'
import { useState } from 'react'



const AgentServices = ({
    services
}) => {

    const [showFull, setShowFull] = useState(false);
    console.log(services.split('</br>'))
  
    return (

    
    <div>
      <h2 className='font-bold text-4xl inline-flex flex-col py-4'>
          Services
          <HeadingBorder />
        </h2>

        <p className='text-lg py-4' dangerouslySetInnerHTML={{ __html: !showFull ? services.split('</br>').slice(0,1 ) : services }} />

        <button className='bg-white text-blue-500 font-bold text-lg' onClick={() => setShowFull(prev => !prev)}>
            Read {showFull ? "Less" : "More"}
        </button>
    </div>
  )
}

export default AgentServices
