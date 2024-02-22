import React, { useState, useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImage,faPlay,faPause,faForward,faBackward,faEllipsisVertical,} from "@fortawesome/free-solid-svg-icons";
import {Time,DropdownButton,DropdownContent,DropdownLink,WholeCardContainer,CardContainer,CardWrapper,
  CardTitle,CardContent,SpecialCardContent,CardImage,RangeInput,ProgressBarContainer,ControlsWrapper,Button,} from "./style";

const DisplayTrack = ({currentTrack,audioRef,setDuration,progressBarRef,handlNext,
                       timeProgress,duration,setTimeProgress,tracks,}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "0:00";
  };
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };
  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    if (audioRef.current && audioRef.current.currentTime) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(progressBarRef.current.value / duration) * 100}%`
      );
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const [isDropdownOpen, setDropdownOpen] = useState(0);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const [isShowing, setIsShowing] = useState(0)

  const toggleModal=()=>{
    setIsShowing(!isShowing)
  }

  

  return (
    <div>
      <WholeCardContainer>
        {tracks.map((currentTrack, index) => (
          <CardWrapper key={index}>
            <audio
              src={currentTrack.song}
              ref={audioRef}
              onLoadedMetadata={onLoadedMetadata}
              onEnded={handlNext}
            />
            <CardContainer>
              <DropdownButton onClick={handleDropdownToggle}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </DropdownButton>
              <DropdownContent show={isDropdownOpen}>
                <DropdownLink  >Delete Song</DropdownLink>
                <DropdownLink onClick={toggleModal}>Update Song</DropdownLink>
                <button onClick={toggleModal}>Close</button>
              </DropdownContent>

              {currentTrack.thumbnail ? (
                <CardImage src={currentTrack.thumbnail} alt="audio-avatar" />
              ) : (
                <div className="icon-wrapper">
                  <span className="audio-icon">
                    <FontAwesomeIcon icon={faImage} />
                  </span>
                </div>
              )}

              <CardTitle>
                <p>{currentTrack.songName}</p>
              </CardTitle>
              <CardContent>
                <p>{currentTrack.author}</p>
              </CardContent>
              <SpecialCardContent>
                <p>{currentTrack.releaseDate}</p>
              </SpecialCardContent>

              <ProgressBarContainer>
                <div className="progress">
                  <span>
                    <Time>{formatTime(timeProgress)}</Time>
                  </span>
                  <RangeInput
                    type="range"
                    ref={progressBarRef}
                    defaultValue="0"
                    onChange={handleProgressChange}
                  />
                  <span>
                    <Time>{formatTime(duration)}</Time>
                  </span>
                </div>
              </ProgressBarContainer>
              <ControlsWrapper>
                <Button onClick={skipBackward}>
                  <FontAwesomeIcon icon={faBackward} />
                </Button>
                <Button onClick={togglePlayPause}>
                  {isPlaying ? (
                    <FontAwesomeIcon icon={faPause} />
                  ) : (
                    <FontAwesomeIcon icon={faPlay} />
                  )}
                </Button>
                <Button onClick={skipForward}>
                  <FontAwesomeIcon icon={faForward} />
                </Button>
              </ControlsWrapper>
            </CardContainer>
          </CardWrapper>
        ))}
      </WholeCardContainer>
    </div>
  );
};

export default DisplayTrack;
