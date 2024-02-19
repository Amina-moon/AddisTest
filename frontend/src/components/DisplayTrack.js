import React, { useState, useCallback, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlay, faPause, faForward, faBackward, faForwardStep, faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import { WholeCardContainer, CardContainer, CardWrapper, CardTitle, CardContent, SpecialCardContent, CardImage, RangeInput, ProgressBarContainer, ControlsWrapper, Button } from './style';


const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef, handlNext, timeProgress, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack }) => {
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
    return '00:00';
  };
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }
  const skipForward = () => {
    audioRef.current.currentTime += 15;

  }
  const skipBackward = () => {
    audioRef.current.currentTime -= 15;

  }
  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };
  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex])
    }
    else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }

  }


  const [isPlaying, setIsPlaying] = useState(false)

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    playAnimationRef.current = requestAnimationFrame(repeat)
  }, [audioRef, duration, progressBarRef, setTimeProgress])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
    else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat)
  }, [isPlaying, audioRef, repeat])


  return (
    <div>
      <WholeCardContainer>
        {tracks.map((currentTrack, index) => (
          <CardWrapper key={index}>
            <CardContainer>
              <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} onEnded={handlNext} />
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
                <p>{currentTrack.title}</p>
              </CardTitle>
              <CardContent>
                <p>{currentTrack.author}</p>
              </CardContent>
              <SpecialCardContent>
                <p>{currentTrack.realseDate}</p>
              </SpecialCardContent>

              <ProgressBarContainer>
                <div className="progress">
                  <span>{formatTime(timeProgress)}</span>
                  <RangeInput
                    type="range"
                    ref={progressBarRef}
                    defaultValue="0"
                    onChange={handleProgressChange}

                  />
                  <span className='time'>{formatTime(duration)}</span>
                </div>

              </ProgressBarContainer>
              <ControlsWrapper>
                <Button onClick={handlePrevious}>
                  <FontAwesomeIcon icon={faBackwardStep} />
                </Button>
                <Button onClick={skipBackward}>
                  <FontAwesomeIcon icon={faBackward} />
                </Button>
                <Button onClick={togglePlayPause}>
                  {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </Button>
                <Button onClick={skipForward}>
                  <FontAwesomeIcon icon={faForward} />
                </Button>
                <Button onClick={handleNext}>
                  <FontAwesomeIcon icon={faForwardStep} />
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