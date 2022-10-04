import React, { useRef } from 'react';
import styled from 'styled-components';
import useAllImagesLoaded from 'hooks/useAllImagesLoaded';
import LoadingPage from 'pages/LoadingPage';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;

const PageWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const documentState = useAllImagesLoaded(wrapperRef);

  return (
    <Wrapper ref={wrapperRef}>
      {!documentState ? <LoadingPage /> : null}
      {children}
    </Wrapper>
  );
};

export default PageWrapper;
