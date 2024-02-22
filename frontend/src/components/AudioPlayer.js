import React, { useState ,useRef} from 'react';
import DisplayTrack from './DisplayTrack.js';
import { tracks } from '../data/Track';

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const audioRef =useRef([]);
  const progressBarRef = useRef()
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  

  
  
  return (
    <div className='audio-player'>
      <div className='inner'>
        <DisplayTrack 
             currentTrack={currentTrack}
             audioRef={audioRef} 
             setDuration={setDuration}
             progressBarRef={progressBarRef}
             timeProgress={timeProgress}
            duration={duration}
            setTimeProgress={setTimeProgress}
            tracks={tracks}
            
            
         />
      </div>
    </div>
  );
};

export default AudioPlayer;