import React from 'react'
import { NavLink } from "react-router-dom";
import styles from './videolist.module.css'
import video from './vid.mp4';
import { RxCross1 } from "react-icons/rx";

function Videolist() {
    const vid_list = [
        {
          id: 1,
          title: "vid_1",
        },
        {
          id: 2,
          title: "vid_2",
        },
        {
          id: 3,
          title: "vid_3",
        },
        {
          id: 4,
          title: "vid_4",
        },
      ];
  return (
    <div className={styles.vid_container}>
        <NavLink to={`/videopage${vid_list[0].id}`} className={styles.vid_list}>
        <div className={styles.video}>
            <video src={video} className={styles.vdo} controls></video>
        </div>
        <div className={styles.title_base}>
            <div className={styles.title}>Title</div>
            <div className={styles.base}>
                <div className={styles.upload}>uploaded 5years ago</div>
                <div className={styles.dot}></div>
                <div className={styles.views}>5k views</div>
            </div>
        </div>
        </NavLink>
        <div className={styles.cross}>
               <RxCross1 size={30} />
        </div>
        
    </div>
  )
}

export default Videolist;