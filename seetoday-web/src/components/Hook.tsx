import React, { useState } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { useInterval } from 'usehooks-ts';
import leftDefaultFish from 'assets/default-fish-left.png';
import HookImgSrc from 'assets/hook.png';
import RopeImgSrc from 'assets/rope.png';
import HookState from 'models/HookState';

const HookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;

  &,
  & > * {
    transition: all 0.1s;
  }

  @keyframes catch {
    0% {
      transform: rotate(70deg);
    }

    100% {
      transform: rotate(110deg);
    }
  }
`;

const Fish = styled.img`
  width: 60px;
  height: 51px;
  margin-top: -55px;
  margin-left: 50px;
  object-fit: cover;
  transform-origin: left center;
  animation: catch 1.5s linear 0s infinite alternate;
`;

const Hook: React.FC = observer(() => {
  const { horizontalPosition, move, moveDirection, isCatched } = HookState;

  const [top, setTop] = useState(-1200);

  useInterval(() => {
    if (move) {
      if (moveDirection === 'FORWARD') setTop(top + 10);
      else setTop(top - 10);
    }
  }, 50);

  return (
    <HookWrapper
      style={{
        left: `${horizontalPosition}px`,
        top: `${top}px`,
      }}
    >
      <img
        style={{
          width: '280px',
        }}
        src={RopeImgSrc}
      />
      <img
        style={{
          width: '280px',
        }}
        src={RopeImgSrc}
      />
      <img
        style={{
          width: '100px',
          marginTop: '-4px',
          marginRight: '8.2px',
          objectFit: 'cover',
        }}
        src={HookImgSrc}
      />
      {isCatched && <Fish src={leftDefaultFish} />}
    </HookWrapper>
  );
});

export default Hook;
