import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalBackgroundImageSrc from 'assets/modal-background.png';
import ModalOkButton from 'assets/modal-ok-button.png';
import generateRandomNumber from 'utils/generateRandomNumber';
import TodayText from 'utils/TodayText';

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

const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 135px;
  margin-top: 30px;

  & > p {
    font-family: locus_sangsang;
    font-size: 18px;
    line-height: 26px;
  }
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

  const [modalIndex, setModalIndex] = useState(
    generateRandomNumber(TodayText.length) - 1
  );

  useEffect(() => {
    if (open === true) {
      setModalIndex(generateRandomNumber(TodayText.length) - 1);
    }
  }, [open]);

  return (
    <ModalContainer open={open}>
      <ModalContentContainer>
        {TodayText[modalIndex].map((text) => (
          <p key={text}>{text}</p>
        ))}
      </ModalContentContainer>
      <Button onClick={handleModalButtonClick} />
    </ModalContainer>
  );
};

export default FishModal;
