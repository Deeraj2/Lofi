import React from 'react';
import './Main.css';
import Nav from './Nav';
import video from './video/sample1.mp4'

function Main() {
     
    
  return (
    <div className='main'>
      <video className='main-video' src={video} autoPlay loop muted />
        <div className='main-content'>
          <Nav />
          <div className='main-body'>
            <h3>Anime Vibe</h3>  
          </div>
        </div>
        
    </div>
  )
}

export default Main