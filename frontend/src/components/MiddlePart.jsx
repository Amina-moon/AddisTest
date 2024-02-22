import React from 'react';
import AudioPlayer from './AudioPlayer'
import { Container,CreateMusicButton} from './style';
import { useNavigate } from 'react-router-dom';

const MiddlePart = () => {

  const navigate = useNavigate();

  const handleCreateMusicClick = () => {
    navigate('/createmusic');
  };
  return (
    <div>
      <Container>
      
      <CreateMusicButton onClick={handleCreateMusicClick}>Create Music</CreateMusicButton>
  
      </Container>
      <AudioPlayer/>

    </div>
  );
};

export default MiddlePart;