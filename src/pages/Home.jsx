import React from "react";
import Sidebar from "../component/Sidebar";
import "./Home.css";
import video from "./vid.mp4";
import { NavLink } from "react-router-dom";

const Home = ({ displayHome, display_home }) => {
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

  const menu_list = ["game", "music", "python", "java", "movie", "comedy","game", "music", "python", "java", "movie", "comedy","game", "music"];

  return (
    <div className="vid_container" style={{ display: displayHome }}>
      <Sidebar></Sidebar>
      <div className="vid_container2">
        {menu_list.map((item) => (
          <p id="item">{item}</p>
        ))}
      </div>

      <NavLink to={`/videopage${vid_list[0].id}`} className="video">
        <video
          src={video}
          controls
          id="video"
          onClick={() => display_home()}
        ></video>
        <div className="base">
          <div className="logo_title_">
            <div className="logo_">
              <p id="name">L</p>
            </div>
            <p className="title_">Title</p>
          </div>

          <div className="upload_view">
            <p>5k views</p>
            <p id="dot"></p>
            <p>uploaded 1year ago</p>
          </div>
        </div>
      </NavLink>
      <div className="video">
        <video src={video} controls id="video"></video>
        <div className="base">
          <div className="logo_title_">
            <div className="logo_">
              <p id="name">L</p>
            </div>
            <p className="title_">Title</p>
          </div>

          <div className="upload_view">
            <p>5k views</p>
            <p id="dot"></p>
            <p>uploaded 1year ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
