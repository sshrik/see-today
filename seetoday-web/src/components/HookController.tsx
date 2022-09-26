import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import HookState from 'models/HookState';

const Button = styled.button`
  width: 50px;
  height: 60px;
  background-color: yellow;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px;
`;

const HookController: React.FC = observer(() => {
  const { toggleMove, turnLeft, turnRight } = HookState;

  return (
    <ButtonContainer>
      <Button onClick={() => turnLeft()}>left</Button>
      <Button onClick={() => toggleMove()}>go</Button>
      <Button onClick={() => turnRight()}>right</Button>
    </ButtonContainer>
  );
});

export default HookController;
