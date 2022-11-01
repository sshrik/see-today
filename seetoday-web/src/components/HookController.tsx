import React, { useState } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { useInterval } from 'usehooks-ts';
import CatchButtonImage from 'assets/controller/catch-button.png';
import LeftButtonImage from 'assets/controller/left-button.png';
import RightButtonImage from 'assets/controller/right-button.png';
import HookState from 'models/HookState';

const Image = styled.img`
  object-fit: contain;
`;

const ButtonContainer = styled.div`
  width: 100%;
  background-color: white;
  z-index: 600;

  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0px;

  @keyframes catch-motion {
    from {
      padding-left: 0px;
      padding-top: 0px;
      height: 130px;
    }
    to {
      padding-left: 10px;
      padding-top: 10px;
      height: 120px;
    }
  }
`;

interface CatchImageProps {
  isCatched: boolean;
}

const CatchImage = styled.img<CatchImageProps>`
  animation: ${({ isCatched }) => {
    if (isCatched) return 'catch-motion 0.4s linear 0s infinite alternate';
    return 'none';
  }};
  object-fit: contain;
`;

const HookController: React.FC = observer(() => {
  const { toggleMove, moveLeft, moveRight, isCatched } = HookState;

  const [isLeftDown, setIsLeftDown] = useState(false);

  const [isRightDown, setIsRightDown] = useState(false);

  const handleLeftDown = () => setIsLeftDown(true);

  const handleRightDown = () => setIsRightDown(true);

  const handleLeftUp = () => setIsLeftDown(false);

  const handleRightUp = () => setIsRightDown(false);

  useInterval(() => {
    if (isLeftDown) moveLeft();
    if (isRightDown) moveRight();
  }, 50);

  return (
    <ButtonContainer>
      <button
        onContextMenu={(e) => e.preventDefault()}
        onMouseDown={handleLeftDown}
        onMouseUp={handleLeftUp}
        onTouchStart={handleLeftDown}
        onTouchEnd={handleLeftUp}
      >
        <Image
          style={{ height: '60px', marginTop: '2px' }}
          src={LeftButtonImage}
        />
      </button>
      <button onClick={toggleMove}>
        <div style={{ width: '132.45px', height: '130px' }}>
          <CatchImage isCatched={isCatched} src={CatchButtonImage} />
        </div>
      </button>
      <button
        onContextMenu={(e) => e.preventDefault()}
        onMouseDown={handleRightDown}
        onMouseUp={handleRightUp}
        onTouchStart={handleRightDown}
        onTouchEnd={handleRightUp}
      >
        <Image style={{ height: '60px' }} src={RightButtonImage} />
      </button>
    </ButtonContainer>
  );
});

export default HookController;
