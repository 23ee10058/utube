import React from 'react'
import './History.css'
import Videolist from './videolist';

import video from './vid.mp4'
import { RxCross1 } from "react-icons/rx";
import HistSidebar from './HistSidebar'

function History() {
  return (
    <div className="hist-container">
   
      <div className="sidebar_hist">
        <HistSidebar></HistSidebar>
      </div>
      <div className="whl">
        <div className="text_history"><b>Watch History</b></div>
      </div>
      <div className="list_vdo">
       <Videolist></Videolist>
      </div>
      <div className="list_vdo1">
       <Videolist></Videolist>
      </div>

      
    </div>
  )
}

export default History;