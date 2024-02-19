import React from 'react';
import styled from '@emotion/styled';
import background from '../assets/img/background2.jpg';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const Image = styled.div`
  background: url(${background}) center/cover no-repeat;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:Black;
  font-size: 40px;
  font-weight:bold;
  font-family: 'Arial, Helvetica', 'sans-serif';
  font-style: oblique;
`;

const Hero = () => {
  return (
    <Container>
      <Image />
      <Content>
        <p>🎼🎹Listen To What You Like🎧🎸</p>
      </Content>
    </Container>
  );
};

export default Hero;