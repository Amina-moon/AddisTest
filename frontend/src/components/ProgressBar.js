import React from 'react';
import styled from '@emotion/styled';

const RangeInput = styled.input`
  --range-progress: 0;

  -webkit-appearance: none;
  position: relative;
  background: #ccc;
  width: 13%;
  height: 5px;
  border-radius: 4px;
  cursor: pointer;

  &::-moz-range-track {
    position: relative;
    background: #ccc;
    width: 13%;
    height: 5px;
    border-radius: 4px;
    cursor: pointer;
  }

  &::before {
    content: '';
    height: 5px;
    background: darkgreen;
    width: var(--range-progress);
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::-moz-range-progress {
    background: darkgreen;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    height: 5px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 9px;
    width: 9px;
    border-radius: 50%;
    border: none;
    background-color: darkgreen;
    cursor: pointer;
    position: relative;
  }

  &:active::-webkit-slider-thumb {
    transform: scale(1.2);
  }

  &::-moz-range-thumb {
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background: darkgreen;
    cursor: pointer;
    border: transparent;
    position: relative;
  }

  &:active::-moz-range-thumb {
    transform: scale(1.2);
  }
`;

const ProgressBarContainer = styled.div`
  .progress {
    display: flex;
    align-items: center;
  }

  .time {
    margin: 0 10px;
  }
`;

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
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

  return (
    <ProgressBarContainer>
      <div >
        <span>{formatTime(timeProgress)}</span>
        <RangeInput
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
        />
        <span>{formatTime(duration)}</span>
      </div>
    </ProgressBarContainer>
  );
};

export default ProgressBar;