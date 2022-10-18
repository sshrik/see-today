import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Location } from 'types/location.d';

interface MoveProps {
  from: Location;
  to: Location;
  duration: number;
  move: boolean;
  onEnd: () => void;
  onStart: () => void;
  onClick?: (e: React.MouseEvent) => void;
}

const MoveWrapper = styled.div`
  position: absolute;
  z-index: 200;
`;

const Move: React.FC<MoveProps> = (props) => {
  const { children, from, to, duration, move, onEnd, onStart, onClick } = props;

  const handleStart = () => onStart();

  const handleEnd = () => onEnd();

  useEffect(() => {
    setTimeout(() => handleStart(), 50);
  }, [move]);

  return (
    <MoveWrapper
      onTransitionEnd={handleEnd}
      onClick={onClick}
      style={
        move
          ? {
              transition: `all ${duration}s linear 0s`,
              left: `${to.x}px`,
              bottom: `${to.y}px`,
            }
          : {
              left: `${from.x}px`,
              bottom: `${from.y}px`,
            }
      }
    >
      {children}
    </MoveWrapper>
  );
};

export default Move;
