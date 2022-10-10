import React, { useState } from 'react';
import styled from 'styled-components';
import JellyFishImageSrc from 'assets/jellyfish.png';
import { Location } from 'types/location.d';
import generateRandomNumber from 'utils/generateRandomNumber';

interface JellyFishImageProps {
  distance: number;
  duration: number;
  location: Location;
}

const JellyFishImage = styled.img<JellyFishImageProps>`
  width: 35px;
  opacity: 0.5;
  object-fit: cover;

  position: absolute;
  left: ${({ location: { x } }) => x}px;
  bottom: ${({ location: { y } }) => y}px;

  @keyframes jellyMove-${({ distance }) => distance} {
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(0px, ${({ distance }) => distance}px);
    }
  }

  animation: jellyMove-${({ distance }) => distance} ${({ duration }) =>
      duration}s linear 0s infinite alternate;
`;

const JellyFish: React.FC = () => {
  const { innerWidth: maxWidth, innerHeight: maxHeight } = window;

  const [startLocation] = useState<Location>({
    x: generateRandomNumber(maxWidth),
    y: generateRandomNumber(maxHeight),
  });

  const [distance] = useState(Math.ceil(Math.random() * 10 + 10));

  const [duration] = useState(Math.random() * 1 + 1);

  return (
    <JellyFishImage
      location={startLocation}
      distance={distance}
      duration={duration}
      src={JellyFishImageSrc}
    />
  );
};

export default JellyFish;
