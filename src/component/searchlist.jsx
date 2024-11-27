import React from "react";
import "../App.css";
import { IoIosSearch } from "react-icons/io";


function Searchlist(props) {
    // const list=['a','b','c','d','e']
    
  return(
    <div className="list_item">
     <ul className="list">
        {props.list.map((item)=>(
            <li className="item">
              <span>{item}</span>
              <IoIosSearch className={'list_search'} />
              
              </li>
        ))}

     </ul>

     </div>
    
    
  
  )
  ;
}

export default Searchlist;
