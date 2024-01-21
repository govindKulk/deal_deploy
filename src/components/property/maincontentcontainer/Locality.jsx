'use client'
import {useState} from 'react'
import {FaThumbsUp,FaThumbsDown} from 'react-icons/fa'
import {PiThumbsUp,PiThumbsDown} from 'react-icons/pi'
import styles from './locality.module.css'

function Locality(props) {

  const [showFull,setShowFull] = useState(false)

  return (
    <div className={styles.localityOverviewContainer}>
        {props.desc&&<div className={styles.localityHead}>
            <div className={styles.localityHeadMain}>
                <h2>{props.localityData.title}</h2>
                <h5>{props.localityData.subtitle}</h5>
            </div>
            <button> View {props.localityData.title} Overview</button>
        </div>}
        <div className={styles.localityContent}>
            <div className={styles.localityContentHead}>
                <h3>Locality Introduction</h3>
                <p>{showFull?props.localityData.introduction:`${props.localityData.introduction.substring(0,200)}`}</p>
                <h6 onClick={()=>setShowFull(!showFull)}>{showFull? 'Read Less':'Read More'}</h6>
            </div>
            <div className={styles.localityContentData}>
                <div className={styles.localityContentDataProCon}>
                    <h2><FaThumbsUp style={{display:'inline'}} color='#33cc33'/> Pro&apos;s</h2>
                    <ul>
                        {props.localityData.Pros.map((dt,index)=>(
                            <li key={index}><PiThumbsUp style={{display:'inline'}} color='#33cc33'/>{dt}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.localityContentDataProCon}>
                    <h2><FaThumbsDown style={{display:'inline'}} color='red'/> Con&apos;s</h2>
                    <ul>
                        {props.localityData.Cons.map((dt,index)=>(
                            <li key={index}><PiThumbsDown style={{display:'inline'}} color='red'/>{dt}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locality