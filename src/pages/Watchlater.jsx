import React from "react";
import HistSidebar from "./HistSidebar";
import styles from "./Watchlater.module.css";
import Videolist from "./videolist";

function Watchlater() {
  return (
    <div className={styles.watch_container}>
      <div className={styles.watch_bar}>
        <HistSidebar />
        <div className={styles.title}>
          <h1>
            <b>Watch Later</b>
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
  );
}

export default Watchlater;
