import React from 'react';
import background from 'assets/background.png';

const PageWrapper: React.FC = ({ children }) => (
  <div className="flex flex-col p-3 rounded-lg text-lime-300 text-xl font-semibold">
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
