import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.module.css";
import "../App.css";
import { IoLogoDeviantart, IoLogoYoutube } from "react-icons/io5";
import React, { useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { MdOutlineApps } from "react-icons/md";
import { LuUserCircle2 } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import Drawsidebar from "./Drawsidebar";
import { NavLink } from "react-router-dom";
import {GoogleLogin} from 'react-google-login'
import {gapi} from 'gapi-script'
import { useDispatch } from "react-redux";
import login from '../actions/auth'



const Navbar = ({ display, click, Displybar }) => {
   const dispatch=useDispatch();
    const onSuccess=(response)=>{
        const Email=response?.profileObj.Email;
        console.log(Email);
        dispatch(login({email:Email}))

    }
    
    
      const onFailure=(response)=>{
        console.log('Failed',response)
    }
    useEffect(()=>{
      function start(){
        gapi.client.init({
          clientId : "36907802942-hbcu54se98aiboe9njrvmdq8ug04q9rn.apps.googleusercontent.com",
          scope : 'email'
          
        })

      }
      gapi.load('client:auth2',start)
    },[]
  )
  return (
    <div className="container">
      <div className="container_1">
        <div className="Burger" onClick={() => Displybar()}>
          <RxHamburgerMenu size={30} className={"burger"} />
        </div>
        <div className="logo_title">
          <IoLogoYoutube size={30} className={"logo"} />
          <p className="title">You tube</p>
        </div>
      </div>
      <div className="container_2">
        <div className="input">
          <input
            type="text"
            className="text"
            onKeyDown={display}
            onChange={click}
          />
        </div>
        <div className="search">
          <IoIosSearch className={"search_icon"} />
        </div>
        <div className="mic">
          <FaMicrophone className={"mic_icon"} size={22} />
        </div>
      </div>
      <div className="container_3">
        <div>
          <MdOutlineVideoCall className={"video"} size={30} />
        </div>
        <div>
          <MdOutlineApps size={30} className={"app_icon"} />
        </div>
        <div>
          <IoIosNotifications size={30} className={"notification"} />
        </div>
        <>
        <GoogleLogin
        clientId="36907802942-hbcu54se98aiboe9njrvmdq8ug04q9rn.apps.googleusercontent.com"
        onSuccess={onSuccess}
        onFailure={onFailure}

        className="google"
        
        />
       
        </>
      </div>
    </div>
  );
};
export default Navbar;
