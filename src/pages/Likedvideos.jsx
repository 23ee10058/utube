import React from 'react'
import styles from './Likedvideos.module.css'
import HistSidebar from './HistSidebar';
import Videolist from "./videolist";

function Likedvideos() {
  return (
    <div className={styles.lib_container}>
      <div className={styles.lib_bar}>
        <HistSidebar />
        <div className={styles.title}>
          <h1>
            <b>Liked Videos</b>
          </h1>
        </div>
        <div className={styles.outer_container}>
          <div className={styles.vid_list_container}>
            <div className={styles.vid1}>
              <Videolist></Videolist>
            </div>
            <div className={styles.vid2}>
              <Videolist></Videolist>
            </div>
            <div className={styles.vid3}>
              <Videolist></Videolist>
            </div>
            <div className={styles.vid4}>
              <Videolist></Videolist>
            </div>
            <div className={styles.vid5}>
              <Videolist></Videolist>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Likedvideos;