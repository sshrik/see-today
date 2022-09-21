import React from 'react';
import background from 'assets/background.png';

const PageWrapper: React.FC = ({ children }) => (
  <div className="flex flex-col p-3 rounded-lg text-lime-300 text-xl font-semibold">
    <img
      src={background}
      style={{
        width: '100%',
        objectFit: 'contain',
        position: 'absolute',
        bottom: 40,
        left: 0,
        zIndex: -1,
      }}
    />
    {children}
  </div>
);

export default PageWrapper;
