import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'


import { IoChevronBackCircle, IoBookmark } from "react-icons/io5";
import { FaPlay, FaPause } from "react-icons/fa";



const Dashboard = () => {


  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [song,setSong] = useState('');

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoaded = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressChange = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };


  return (
    <div className='dashboard-page'>

      <div className="dashboard-page__content">
        <aside className="dashboard-page__aside dashboard-page__aside--sidebar">

          <button className='dashboard-page__aside-back'><IoChevronBackCircle /></button>
          <ul className='dashboard-page__aside-list'>
            <li><button className='dashboard-page__aside-list-item'>playlist</button></li>
            <li><button className='dashboard-page__aside-list-item'>album</button></li>
            <li><button className='dashboard-page__aside-list-item'>musicians</button></li>
          </ul>

          {/* <div className='example'>
            <div className='example__count'><IoBookmark /></div>
            <div className='example__context'>
              <h3 className='example__title'>hello</h3>
              <p className='example__count'>boy</p>
            </div>
          </div> */}

        </aside>

        <main className="dashboard-page__main">
          {/* component... */}
        </main>

        <div className="dashboard-page__aside dashboard-page__aside--songbar">
          {/* <Album setSong={ setSong }/> */}
        </div>
      </div>

      <div className="dashboard-page__footer ">
        <div className='dashboard-page__player'>
          <audio
            ref={audioRef}
            src={song}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoaded}
          />

          <div className="dashboard-page__controls">
            <button onClick={togglePlay} className="">
              {isPlaying ? <FaPause/> : <FaPlay/>}
            </button>
          </div>

          <div className="dashboard-page__progress">
            <span>{formatTime(currentTime)}</span>

            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleProgressChange}
            />
            <span>-{formatTime(duration - currentTime)}</span> 

            <button className="text-white" onClick={ () => setSong('/Eminem_Nate_Dogg_-_Till_I_Collapse.mp3')}>song</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard



