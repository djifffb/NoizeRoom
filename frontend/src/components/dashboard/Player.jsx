import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";


const Player = () => {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [song, setSong] = useState('');

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
        <>
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
                            {isPlaying ? <FaPause /> : <FaPlay />}
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

                        <button className="text-white" onClick={() => setSong('/Eminem_Nate_Dogg_-_Till_I_Collapse.mp3')}>song</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Player