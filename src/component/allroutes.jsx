import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import videopage1 from '../pages/videopage1';
import Sidebar from './Sidebar';
import History from '../pages/History';
import Watchlater from '../pages/Watchlater';
import Likedvidoes from '../pages/Likedvideos';


function Allroutes() {
  return (
    <Routes>
        
        <Route exact path='/videopage1' Component={videopage1}></Route>
        <Route exact path='' Component={Home}></Route>
        <Route exact path='/Home' Component={Home}></Route>
        <Route exact path='/history' Component={History}></Route>
        <Route exact path='/watchlater' Component={Watchlater}></Route>
        <Route exact path='/likedvideo' Component={Likedvidoes}></Route>
    </Routes>
  )
}

export default Allroutes;