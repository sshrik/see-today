import React from 'react';
import styled from 'styled-components';
import background from 'assets/background.png';
import JellyFish from 'components/background/JellyFish';
import WaterDrop from 'components/background/WaterDrop';
import Fish from 'components/Fish';
import Hook from 'components/Hook';
import HookController from 'components/HookController';
import PageWrapper from 'components/PageWrapper';

const BackgroundImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const MainPage: React.FC = () => {
  return (
    <PageWrapper>
      <BackgroundImage src={background} />
      {[...new Array(10)].map((_, index) => (
        <WaterDrop key={`water-${index}`} />
      ))}
      {[...new Array(10)].map((_, index) => (
        <JellyFish key={`jelly-${index}`} />
      ))}
      {[...new Array(5)].map((_, index) => (
        <Fish key={`fish-${index}`} />
      ))}
      <Hook />
      <HookController />
    </PageWrapper>
  );
};

export default MainPage;
