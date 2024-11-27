import React from 'react'
import './Drawsidebar.css'
import { FaHome } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { AiTwotoneLike } from "react-icons/ai";

function Drawsidebar({toggleDrawbar,Displybar}) {
  return (
    <div className='draw_container' style={{display:toggleDrawbar.display}}>
        <div className="container1">
           <NavLink to={'/Home'} className="home" onClick={Displybar}>
               
                <FaHome size={40} className='icon'/>
                <p id='text'>Home</p>
               
           </NavLink>
           <NavLink 
           to={'/Explore'}
           className="explore">
                <MdOutlineExplore size={30} className='icon'/>
                <p id='text'>Explore</p>
           </NavLink>
           
           <div className="shorts">
                <SiYoutubeshorts size={30} className='icon'/>
                <p id='text'>Shorts</p>
           </div>
           <div className="Subscriptions">
                <MdSubscriptions size={30} className='icon'/>
                <p id='text'>Subscriptions</p>
           </div>

          
        </div>
        <div className="container2">
           <NavLink to={'/likedvideo'} className="library" onClick={Displybar}>
                <AiTwotoneLike size={40} className='icon'/>
                <p id='text'>Liked Videos</p>
           </NavLink>
           <NavLink to={'/history'} className="History" onClick={Displybar}>
                <FaHistory size={30} className='icon'/>
                <p id='text'>History</p>
           </NavLink>
           
           
           <NavLink className="watch"
           to={'/Watchlater'}
           onClick={Displybar}
           >
                <MdOutlineWatchLater size={30} className='icon'/>
                <p id='text'>Watch later</p>
           </NavLink>
           <NavLink to={'/yourvideo'} className="YourVideo" onClick={Displybar}>
                <FaVideo size={30} className='icon'/>
                <p id='text'>Your videos</p>
           </NavLink>


          
        </div>
        <div className="container3">
          <div >
               <h2 className="text1">Your Subsciptions</h2>
               <div className="channel">
                    <h1 id='c'>C</h1>
                    <p id='channel'>Channel</p>
               </div>
               <div className="channel">
                    <h1 id='c'>C</h1>
                    <p id='channel'>Channel</p>
               </div>
               <div className="channel">
                    <h1 id='c'>C</h1>
                    <p id='channel'>Channel</p>
               </div>
          </div>
        </div>
        
        
    </div>
  )
}

export default Drawsidebar