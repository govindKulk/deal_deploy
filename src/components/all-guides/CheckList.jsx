import React from 'react'
import styles from './allguides.module.css'
const dummyCheckList = ["What to Buy?",
"When to Buy?",
"Where to Buy?",
"How to Buy?",
"Financials",
"Home Loan",
"Legal & Tax",
"Tips and Tricks",
"Moving in",
"All about RERA",
"NRI Homebuyers",
"Distressed property",
"Disputed property",
"Buying a home under PMAY",
"Theme-based Homes",
"Real Estate Technology",]

const CheckList = () => {
  return (
    <div className={`${styles.checkListContainer} max-w-[400px] md:max-w-full mx-auto md:mx-0 px-4 py-4`}>

    <ul className={`${styles.checkList} `}>
      {
        dummyCheckList.map((item,index) => (<li key={index} className='font-bold text-lg min-[920px]:text-2xl min-[920px]:py-4 flex items-center gap-2  '>
            <span className='w-[50px] inline-flex'>{index + 1} </span>
            <span className='ml-2 border-b
            border-b-neutral-500 py-2 min-[920px]:py-4 '>{item}</span>
        </li>))
      }
    </ul>
    </div>
  )
}

export default CheckList
