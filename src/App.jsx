
import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Searchlist from './component/searchlist'
import Sidebar from './component/Sidebar'

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Drawsidebar from './component/Drawsidebar'
import Allroutes from './component/allroutes'
import Home from './pages/Home'
import History from './pages/History'






function App() {
  // const list1=['first','second','third','fourth'];
  let [item,setitem]=useState([]);
  const display=(e)=>{
    if(e.key =='Enter'){
      let newItem=[...item,e.target.value];
      e.target.value='';
      setitem(newItem);
      console.log(item);
      
      
    
    }}
    const [toggleDrawbar,settoggleDrawbar]=useState({display:'none'})
    

    const Displybar=()=>{
      if(toggleDrawbar.display==='none'){
        settoggleDrawbar({display:'block'})
      }
      else{
        settoggleDrawbar({display:'none'})
      }
     
      
     

    }
    const [displayHome,setdisplayHome]=useState({display:'flex'})
    const display_home=()=>{
      if(displayHome.display==='none'){
        setdisplayHome({display:'flex'})
        console.log(displayHome.display)
      }
      else{
        setdisplayHome({display:'none'})
        console.log(displayHome.display)
      }
    }
    return (
      <>
      
      
      <Navbar display={display} Displybar={Displybar} toggleDrawbar={toggleDrawbar}></Navbar>
      <Searchlist list={item}></Searchlist>
      
      
      
      
      <Drawsidebar Displybar={Displybar} toggleDrawbar={toggleDrawbar}></Drawsidebar>
      <Allroutes></Allroutes>
      
      
      
      </>

    )
      

    
  
  


  

}

export default App
