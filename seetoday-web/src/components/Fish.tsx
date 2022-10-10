import React, { useState } from 'react';
import leftDefaultFish from 'assets/default-fish-left.png';
import rightDefaultFish from 'assets/default-fish-right.png';
import Move from 'components/background/Move';
import { Location } from 'types/location.d';
import generateRandomNumber from 'utils/generateRandomNumber';

const LeftFish: React.FC = () => (
  <img
    style={{ width: '60px', height: '51px', objectFit: 'cover' }}
    src={leftDefaultFish}
  />
);

const RightFish: React.FC = () => (
  <img
    style={{ width: '60px', height: '51px', objectFit: 'cover' }}
    src={rightDefaultFish}
  />
);

const Fish: React.FC = () => {
  const { innerWidth: maxWidth, innerHeight: maxHeight } = window;

  const initLocation = (): Location => ({
    x: generateRandomNumber(maxWidth),
    y: generateRandomNumber(maxHeight),
  });

  const initDuration = () => generateRandomNumber(8, 3, false);

  const [from, setFrom] = useState<Location>(initLocation());

  const [to, setTo] = useState<Location>(initLocation());

  const [move, setMove] = useState(false);

  const [duration, setDuration] = useState(initDuration());

  const initLocationState = () => {
    setFrom(initLocation());
    setTo(initLocation());
    setDuration(initDuration());
    setMove(false);
  };

  const handleStart = () => setMove(true);

  return (
    <Move
      from={from}
      to={to}
      duration={duration}
      onEnd={initLocationState}
      onStart={handleStart}
      move={move}
    >
      {from.x > to.x ? <LeftFish /> : <RightFish />}
    </Move>
  );
};

export default Fish;
