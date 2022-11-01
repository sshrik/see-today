import React, { useEffect, useMemo, useState } from 'react';
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

  &,
  & > * {
    transition: all 0.1s;
  }
`;

const Fish = styled.img`
  @keyframes catch {
    0% {
      transform: rotate(70deg);
    }

    100% {
      transform: rotate(110deg);
    }
  }

  width: 60px;
  height: 51px;
  margin-top: -55px;
  margin-left: 50px;
  object-fit: cover;
  transform-origin: left center;
  animation: catch 1.5s linear 0s infinite alternate;
`;

const Hook: React.FC = observer(() => {
  const { maxHeight, maxWidth } = useMemo(
    () => ({
      maxHeight: window.innerHeight,
      maxWidth: window.innerWidth,
    }),
    []
  );

  const {
    horizontalPosition,
    move,
    toggleMove,
    moveDirection,
    isCatched,
    setMaxTimeoutInterval,
    setMinTimeoutInterval,
    openModal,
  } = HookState;

  const [top, setTop] = useState(-900);

  useInterval(() => {
    if (move) {
      if (moveDirection === 'FORWARD') {
        if (top < maxHeight - 900 - 280) {
          setTop(top + 10);
        } else {
          toggleMove();
        }
      } else if (top > -910) setTop(top - 10);
    }
  }, 50);

  useEffect(() => {
    if (top < -900 && isCatched) {
      openModal();
      setTop(-900);
    }
  }, [top, isCatched]);

  useEffect(() => {
    setMinTimeoutInterval(((maxHeight - 130) / 200) * 0.2);
    setMaxTimeoutInterval(((maxHeight - 130) / 200) * 0.8);
  }, []);

  return (
    <HookWrapper
      style={{
        left: `${maxWidth / 2 + horizontalPosition - 110}px`,
        top: `${top}px`,
      }}
    >
      <img
        style={{
          width: '220px',
          height: '900px',
        }}
        src={RopeImgSrc}
      />
      <img
        style={{
          width: '100px',
          marginTop: '-4px',
          marginRight: '5.2px',
          objectFit: 'cover',
        }}
        src={HookImgSrc}
      />
      {isCatched && <Fish src={leftDefaultFish} />}
    </HookWrapper>
  );
});

export default Hook;
