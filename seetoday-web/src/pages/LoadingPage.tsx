import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/logo.png';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: white;
`;

const LoadingPage: React.FC = () => {
  return (
    <PageWrapper>
      <img
        style={{
          width: '150px',
          objectFit: 'cover',
          marginBottom: '30px',
        }}
        src={Logo}
      />
    </PageWrapper>
  );
};

export default LoadingPage;
