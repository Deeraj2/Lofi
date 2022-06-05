import React, { useState } from 'react';
import './Main.css';
import Nav from './Nav';
import RadioData from './RadioData';
import RadioStation from './RadioStation';
import video from './video/sample1.mp4'

function Main() {
   
  // const [liveStream, setLiveStream] = useState(false)
  // const [currentLive, setCurrentLive] = useState(
  //   "https://www.youtube.com/watch?v=WDXPJWIgX-o&ab_channel=nostalgicmusic"
  // )
  // const [name , setName] = useState('Anime Vibe')
  // const[yvideo, setyVideo] = useState("//www.youtube.com/embed/WDXPJWIgX-o?autoplay=1&start=1")
  
  // const animeVibe = () => {
  //   setyVideo("//www.youtube.com/embed/WDXPJWIgX-o?autoplay=1&start=1");
  //   setName("Anime Vibe");
  //   setCurrentLive("https://www.youtube.com/watch?v=WDXPJWIgX-o&ab_channel=nostalgicmusic")
  //   setLiveStream(true)
  // }
  

  return (
    <div className='main'>
      <video className='main-video' src={video} autoPlay loop muted />
        <div className='main-content'>
          <Nav />
          <RadioData />
        </div>
        
    </div>
  )
}

export default Main