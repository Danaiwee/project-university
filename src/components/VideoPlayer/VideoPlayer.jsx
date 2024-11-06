import React from 'react'
import './VideoPlayer.css';
import video1 from '../../assets/video1.mp4';
import close_icon from '../../assets/close.png';

const VideoPlayer = ({playVideo, setPlayVideo}) => {
  return (
    <div className={playVideo ? 'video-player' : 'video-player hide' }>
        <video src={video1} autoPlay muted controls loop></video>
        <img src={close_icon} alt="close" onClick={()=> setPlayVideo(false)} />
    </div>
  )
}

export default VideoPlayer