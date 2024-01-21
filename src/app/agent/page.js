"use client"
import AskDealAcres from '@/components/agent/AskDealAcres'
import BestAgent from '@/components/agent/BestAgent'
import FeedbackPopup from '@/components/agent/Feedback'
import ImgSlider from '@/components/agent/ImgSlider'
import NormalAgent from '@/components/agent/NormalAgent'
import RealAgent from '@/components/agent/RealAgent'
import TopBar from '@/components/agent/TopBar'
import React, {useState, useEffect} from 'react'

const AgentPage = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollCount(scrollCount + 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollCount]);

  useEffect(() => {
    if (scrollCount == 5) {
      setShowPopup(true);
    }
  }, [scrollCount]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <ImgSlider />
      <TopBar />
      <BestAgent />
      {showPopup && 
      <FeedbackPopup onClose={closePopup} />}
      <RealAgent />
      <NormalAgent />
      <AskDealAcres />
      <NormalAgent />




    </div>
  )
}

export default AgentPage
