import React from "react";
import "./videopage1.css";
import video from "./vid.mp4";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import { useState } from "react";

import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import DisplayComment from "../component/DisplayComment";

function videopage1() {
  
  const [likeVideo, setlikeVideo] = useState(0);
  const [dislikeVideo, setdislikeVideo] = useState(0);
  const [likeNumber, setlikeNumber] = useState(5);
  const [dislikeNumber, setdislikeNumber] = useState(1);
  const [addComment,setaddComment]=useState([]);

  const likeset = () => {
    if (likeVideo === 0) {
      setlikeVideo(1);
      setlikeNumber(likeNumber + 1);
    } else {
      setlikeVideo(0);
      setlikeNumber(likeNumber - 1);
    }
  };
  const dislikeset = () => {
    if (dislikeVideo === 0) {
      setdislikeVideo(1);
      setdislikeNumber(dislikeNumber + 1);
    } else {
      setdislikeVideo(0);
      setdislikeNumber(dislikeNumber - 1);
    }
  };
  const saveComment=()=>{
    const comment=document.querySelector('.input_box')
    
    let newComment=[...addComment,comment.value]
    comment.value='';
    setaddComment(newComment);
   
  }
  const cancel_input=()=>{
    const comment=document.querySelector('.input_box')
    comment.value='';
  }
  return (
    <div className="videopage_total">
      <div className="video_container">
        <div className="video1">
          <video src={video} controls className="vid_video1"></video>
          <p id="title">Title</p>
          <div className="channel_container">
            <div className="logo1">
              <p id="name1">C</p>
              <p id="channel1">Channel</p>
            </div>
            <button className="button">
              <p className="subs">Subscribe</p>
            </button>
            <div className="button_like">
              <button className="like" onClick={likeset}>
                {likeVideo === 1 ? (
                  <>
                    <AiFillLike />
                    {likeNumber}
                  </>
                ) : (
                  <>
                    <AiTwotoneLike />
                    {likeNumber}
                  </>
                )}
              </button>
              <button className="dislike" onClick={dislikeset}>
                {dislikeVideo === 1 ? (
                  <>
                    <AiFillDislike />
                    {dislikeNumber}
                  </>
                ) : (
                  <>
                    <AiTwotoneDislike />
                    {dislikeNumber}
                  </>
                )}
              </button>
            </div>
            <button className="share_but">
              <div className="share">
                <IoIosShareAlt size={30} className={"share_icon"} />
                <p id="share">Share</p>
              </div>
            </button>
            <button className="download_total">
              <div className="download">
                <HiDownload size={30} className={"download_icon"} />
                <p id="download">Download</p>
              </div>
            </button>
          </div>
          <div className="comment_box">
            <u id="comment">Comment</u>
            <div className="input">
              <input
                type="text"
                placeholder="add comment"
                className="input_box"
                
              />
              <button className="cancel_button" onClick={cancel_input}>Cancel</button>
              <button className="Comment_button" onClick={saveComment}>Comment</button>
            </div>
            <DisplayComment addComment={addComment}/>
          </div>
        </div>
      </div>
      <div className="side_video">SideVideo</div>
    </div>
  );
}

export default videopage1;
