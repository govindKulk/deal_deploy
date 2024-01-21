import styles from './maincontent.module.css'
import AboutDev from './AboutDev.jsx'
import PopularProjects from '@/components/locationOverview/content1/PopularProjects'
import Category from './Category.jsx'
import BuilderSpeak from './BuilderSpeak.jsx'
import Topdev from '@/components/locationOverview/content2/Topdev'

function Maincontent() {
  return (
    <div className = {styles.singleDevMainContainer}>
        <AboutDev/>
        <div>
            <h5>Ongoing projects by M3M India Pvt. Ltd.</h5>
            <PopularProjects/>
        </div>
        <div>
            <h5>Delivered projects by M3M India Pvt. Ltd.</h5>
            <PopularProjects/>
        </div>
        <div>
            <Category/>
        </div>
        <div>
            <h5>Builder Speak</h5>
            <BuilderSpeak/>
        </div>
    </div>
  )
}

export default Maincontent