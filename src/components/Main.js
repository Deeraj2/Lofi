import React, { useState } from 'react';
import './Main.css';
import Nav from './Nav';
import ReactPlayer from "react-player";
import RadioStation from './RadioStation';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

function Main() { 
  
  const [sidebar, setSidebBar] = useState(false)
  const showSidebar = () => setSidebBar(!sidebar);


  const[yvideo, setyVideo] = useState("//www.youtube.com/embed/WDXPJWIgX-o?autoplay=1&start=1")
  const [isplaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const play = () => {
    setIsPlaying(true);
    setVolume(0.5);
  }
  const pause = () => {
    setIsPlaying(false);
    setVolume("mute");
  }

  const animeVibe = () => {
    setyVideo("//www.youtube.com/embed/WDXPJWIgX-o?autoplay=1&start=1");
  }

  const ambient = () => {
    setyVideo("//www.youtube.com/embed/QUqhgZjrrsE?autoplay=1&start=1");
  }

  const astralThrob = () => {
    setyVideo("//www.youtube.com/embed/DWcJFNfaw9c?autoplay=1&start=1")
  }
  
  const chillHouse = () => {
    setyVideo("//www.youtube.com/embed/9UMxZofMNbA?autoplay=1&start=1")
  }

  const chillCow = () => {
    setyVideo("//www.youtube.com/embed/5qap5aO4i9A?autoplay=1&start=1")
  }

  const ivyRecord = () => {
    setyVideo("//www.youtube.com/embed/aLqc8TdoLJ0?autoplay=1&start=1")
  }

  const h5g1Music = () => {
    setyVideo("//www.youtube.com/embed/Nq_MBHx5pko?autoplay=1&start=1")
  }

  const lofiGirl = () => {
    setyVideo("//www.youtube.com/embed/n61ULEU7CO0?autoplay=1&start=1")
  }

  const spinninRecords = () => {
    setyVideo("//www.youtube.com/embed/N65Jb683pXQ?autoplay=1&start=1")
  }

  const niceGuy = () => {
    setyVideo("//www.youtube.com/embed/oVi5gtzTDx0?autoplay=1&start=1")
  }

  const jazCafe = () => {
    setyVideo("//www.youtube.com/embed/Dx5qFachd3A?autoplay=1&start=1")
  }

  return (
      <div className='main'>

        <div className='main-video'>
          <ReactPlayer
                url={yvideo}
                width="100%"
                height="100%"
                position="relative"
                overflow="hidden"
                playing={isplaying}
                loop={true}
                volume={volume}
              />
        </div>
        <div className='main-detail'>
          <div className='main-content'>
            <Nav />
            <RadioStation 
              anime={animeVibe}
              ambient={ambient}
              astral={astralThrob}
              chill={chillHouse}
              chill2={chillCow}
              ivy={ivyRecord}
              h5g1={h5g1Music}
              lofigirl={lofiGirl}
              spinninRecords={spinninRecords}
              niceGuy={niceGuy}
              jazCafe={jazCafe}
            />
          </div>
          <div className='main-footer'>
            <div className="main-footer-audio">
              <div className='footer-ply'>
                {isplaying ? (<PauseCircleOutlineIcon onClick={pause}  sx={{ fontSize: "60px"}} />) : (<PlayCircleOutlineIcon onClick={play} sx={{ fontSize: "60px" }} />)}
              </div>
              <div className='footer-bar'>
                <VolumeUpIcon sx={{ fontSize: "40px"}}/>
                <input
                  className="volumeDial"
                  type="range"
                  min={0}
                  max={1}
                  value={volume}
                  step={0.01}
                  onChange={(event) => {
                    setVolume(event.target.valueAsNumber);
                  }}
                />
              </div>
            </div>
                 
          </div>

        </div>
    </div>
  )
}

export default Main