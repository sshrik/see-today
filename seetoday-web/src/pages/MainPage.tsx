import React, { useState } from 'react';
import WaterDrop from 'components/background/WaterDrop';
import Fish from 'components/Fish';
import PageWrapper from 'components/PageWrapper';

const MainPage: React.FC = () => {
  const [score, setScore] = useState(0);

  const scoreUp = () => {
    setScore(score + 1);
  };

  return (
    <PageWrapper>
      {[...new Array(10)].map((_, index) => (
        <WaterDrop key={`water-${index}`} />
      ))}
      {[...new Array(50)].map((_, index) => (
        <Fish onClick={scoreUp} key={`water-${index}`} />
      ))}
      <div
        style={{
          padding: '24px',
          position: 'absolute',
          backgroundColor: '#75D1FF',
          width: '100%',
          zIndex: '9999',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <p>{`현재 ${score}점`}</p>
      </div>
    </PageWrapper>
  );
};

export default MainPage;
