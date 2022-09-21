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
      {[...new Array(3)].map((_, index) => (
        <WaterDrop key={`water-${index}`} />
      ))}
      {[...new Array(10)].map((_, index) => (
        <Fish onClick={scoreUp} key={`water-${index}`} />
      ))}
    </PageWrapper>
  );
};

export default MainPage;
