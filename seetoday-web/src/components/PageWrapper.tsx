import React from 'react';
import background from 'assets/background.png';

const PageWrapper: React.FC = ({ children }) => (
  <div
    className="flex flex-col"
    style={{
      width: '100vw',
      height: '100vh',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }}
  >
    <img
      src={background}
      style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: -1,
      }}
    />
    {children}
  </div>
);

export default PageWrapper;
