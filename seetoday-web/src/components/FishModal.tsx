import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalBackgroundImageSrc from 'assets/modal-background.png';
import ModalDartContents from 'assets/modal-dart-contents.png';
import ModalOkButton from 'assets/modal-ok-button.png';

interface ModalProps {
  open: boolean;
  onClose?: () => void;
}

const ModalContainerBackground = styled.div<ModalProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-bottom: 60px;
  background-color: #33333333;
  z-index: 9999;

  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const ModalBackground = styled.div`
  background-image: url('${ModalBackgroundImageSrc}');
  background-size: cover;

  gap: 20px;
  width: 380px;
  height: 300px;
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ModalContainer: React.FC<ModalProps> = ({ children, open }) => {
  const el = document.getElementById('modal');

  if (el) {
    return ReactDOM.createPortal(
      <ModalContainerBackground open={open}>
        <ModalBackground>{children}</ModalBackground>
      </ModalContainerBackground>,
      el
    );
  }

  return <>{children}</>;
};

const Button = styled.button`
  background-image: url('${ModalOkButton}');
  background-size: cover;
  width: 110px;
  height: 40px;
`;

const FishModal: React.FC<ModalProps> = ({ open, onClose }) => {
  const handleModalButtonClick = () => onClose && onClose();

  return (
    <ModalContainer open={open}>
      <img style={{ width: '260px' }} src={ModalDartContents} />
      <Button onClick={handleModalButtonClick} />
    </ModalContainer>
  );
};

export default FishModal;
