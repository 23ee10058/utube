import React from 'react'
import './DisplayComment.css'

function DisplayComment({addComment}) {
  return (
    <div className='display_comment_container'>
        <div className="logo_comment">
            {addComment.map((item)=>(<>
            <div className="logo_channel_name">
                <div className="logo_comment">C</div>
                <div className="channel_name">Channel</div>
                <p id='comment_dot'></p>
                <div className="upload_time">5years ago</div>
            </div>
            <div className="comment">{item}</div>
            </>
        ))}
        </div>

        
    </div>
  )
}

export default DisplayComment