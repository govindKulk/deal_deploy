import Image from 'next/image'
import React from 'react'
import TandCBanner from "../../../public/TandC/BannerTandC.webp"
import styles from "./page.module.css"
import Content from './Content'
const page = () => {
  return (
    <div>
      <Image
      src={TandCBanner}
      alt='Terms and Conditions'
      className={styles.banner}
      />
      <Content />
    </div>
  )
}

export default page
