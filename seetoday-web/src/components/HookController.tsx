import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
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
`;

const HookController: React.FC = observer(() => {
  const { toggleMove, turnLeft, turnRight } = HookState;

  return (
    <ButtonContainer>
      <button onClick={() => turnLeft()}>
        <Image
          style={{ height: '60px', marginTop: '2px' }}
          src={LeftButtonImage}
        />
      </button>
      <button onClick={() => toggleMove()}>
        <Image style={{ height: '130px' }} src={CatchButtonImage} />
      </button>
      <button onClick={() => turnRight()}>
        <Image style={{ height: '60px' }} src={RightButtonImage} />
      </button>
    </ButtonContainer>
  );
});

export default HookController;
