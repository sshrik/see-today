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
`;

const HookController: React.FC = observer(() => {
  const { toggleMove, moveLeft, moveRight } = HookState;

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
        <Image style={{ height: '130px' }} src={CatchButtonImage} />
      </button>
      <button
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
