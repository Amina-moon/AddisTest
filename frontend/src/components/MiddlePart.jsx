import React from 'react';
import AudioPlayer from './AudioPlayer'
import { Container,CreateMusicButton} from './style';







const MiddlePart = () => {
  return (
    <div>
      <Container>
      
      <CreateMusicButton>Create Music</CreateMusicButton>
  
      </Container>
      <AudioPlayer/>

    </div>
  );
};

export default MiddlePart;