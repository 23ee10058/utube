import React from 'react'
import './Sidebar.css'
import { FaHome } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";


function Sidebar() {
  return (
    <div className='side_container'>
        <div className="Home">
            <FaHome size={30} className={'icon'} />
            <p className='text_'>Home</p>
        </div>
        <div className="Explore">
            <MdOutlineExplore size={30} className={'icon'} />
            <p className='text_'>Explore</p>
        </div>
        <div className="Subscription">
            <MdSubscriptions size={30} className={'icon'} />
            <p className='text_'>Subscription</p>
        </div>
        <div className="Library">
            <MdOutlineVideoLibrary size={30} className={'icon'} />
            <p className='text_'>Library</p>
        </div>
        

        

    
    </div>
  )
}

export default Sidebar;