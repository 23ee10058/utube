import React from 'react'

import { FaHome } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import styles from './HistSidebar.module.css'


function HistSidebar() {
  return (
    <div className={styles.side_container}>
        <div className={styles.Home}>
            <FaHome size={30} className={styles.icon}/>
            <p className={styles.text}>Home</p>
        </div>
        <div className={styles.Explore}>
            <MdOutlineExplore size={30} className={styles.icon} />
            <p className={styles.text}>Explore</p>
        </div>
        <div className={styles.Subscriptions}>
            <MdSubscriptions size={30} className={styles.icon} />
            <p className={styles.text}>Subscription</p>
        </div>
        <div className={styles.Library}>
            <MdOutlineVideoLibrary size={30} className={styles.icon} />
            <p className={styles.text}>Library</p>
        </div>
        

        

    
    </div>
  )
}

export default HistSidebar;