import FaqBanner from '@/components/faq/FaqBanner'
import ContactStrip from '@/components/safety/ContactStrip'
import FaqForm from '@/components/faq/FaqForm'
import FaqCategoryButton from '@/components/faq/FaqCategoryButton'
import FaqTopicList from '@/components/faq/FaqTopicList'
import ArticleSlider from '@/components/faq/ArticleSlider'

import styles from './faqPage.module.css'

import img from '../../../public/faq/faq_banner.webp'
import qna from '../../../public/faq/q&a.webp'

import { generalQuestions, questionByTopic, questionTopics } from './faqData'

import Image from 'next/image'


const page = () => {

  return (
    <div>
      <FaqBanner img={img} />
      <ContactStrip />

      <div className='mx-auto max-w-screen-xl px-4'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 py-16'>
          {
            questionTopics.map((topic, index) => {

              return (<FaqCategoryButton label={topic} key={index} />)

            })
          }
        </div>

   

        <div className='px-4 lg:px-0'>


          <div className={`${styles.generalHeading} font-medium text-4xl py-4 inline-flex items-center  border-b-[4px] border-black gap-4 `}>
            <span className='h-[70px] w-[70px]'>
              <Image src={qna} alt='question and answers image' />
            </span>
            <h2>
              General Questions

            </h2>
          </div>


          <div className='w-full flex flex-col  items-start md:items-stretch lg:flex-row '>

            <div className=''>
              <ul className='list-disc py-2'>
                

                <FaqTopicList lists={generalQuestions}/>
                
                {/* {Math.ceil(generalQuestions.length/2) } more questions */}
              </ul>
            </div>


             {/* Form container */}
            <div className='relative mx-auto md:mx-0  lg:ml-auto  lg:px-4 py-4'>
              <div className='w-full'>
                <p className='font-light text-xl py-2'>
                  We &apos; ll get in touch with you.
                </p>
                <FaqForm />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* How deal acres help you */}

      <div className='bg-blue-600'>
        <div className=' max-w-screen-xl px-4 py-8  text-white mx-auto '>

          <h3 className='font-bold text-2xl md:text-4xl text-center py-4'>How Deal Acres Help You? </h3>
          <p className='font-medium text-justify md:text-lg'>Welcome to the Deal Acres FAQ (Frequently Asked Questions) page, where buyers and owners can find answers to their questions related to login or registration, property search, property advertisement posting, account management and other related topics. Start your search by simply entering keywords in the search bar, located at the top of the page or you can browse through questions under the categories given below. Alternatively, you can also reach out to us at  7015963201, 8307757571 (Monday to Saturday, 9 AM to 9 PM) to talk to our customer support executive. Additionally, you can also explore the Articles section below, for the latest real estate news and updates.</p>
        </div>
      </div>

      {/* Explore questions by Topic */}

      <div className='bg-[#addbf1]'>
        <div className=' max-w-screen-xl px-4 py-4 lg:py-8 mx-auto  lg:grid lg:grid-cols-3 items-start'>
          {questionByTopic.map((item, index) => {
            return (
              <FaqTopicList isGrid key={index} hasBorder={index !== 2} title={item.title} lists={item.lists} />
            )
          })}

        </div>

      </div>

      {/* Article Slider */}

      <div className='max-w-screen-xl mx-auto px-4 my-8'>
      <h3 className='font-bold text-3xl py-4 px-4'>
          Articles
        </h3>

        <ArticleSlider />

        {/* Add Interesting Readings Here remove the article slider */}
      </div>





    </div>
  )
}

export default page
