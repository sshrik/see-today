import React, { useState } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { useInterval } from 'usehooks-ts';
import HookImgSrc from 'assets/hook.png';
import RopeImgSrc from 'assets/rope.png';
import HookState from 'models/HookState';

const HookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  overflow: hidden;
  width: 100%;

  &,
  & > * {
    transition: all 0.1s;
  }
`;

const Hook: React.FC = observer(() => {
  const { horizontalPosition, move, moveDirection } = HookState;

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
    </HookWrapper>
  );
});

export default Hook;
