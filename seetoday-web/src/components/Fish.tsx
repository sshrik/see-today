import React, { useState } from 'react';
import leftDefaultFish from 'assets/default-fish-left.png';
import rightDefaultFish from 'assets/default-fish-right.png';
import Move from 'components/background/Move';
import { Location } from 'types/location.d';
import generateRandomNumber from 'utils/generateRandomNumber';

interface FishProps {
  onClick?: React.MouseEventHandler;
}

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

const Fish: React.FC<FishProps> = (props) => {
  const { onClick } = props;

  const { innerWidth: maxWidth, innerHeight: maxHeight } = window;

  const [from, setFrom] = useState<Location>({
    x: generateRandomNumber(maxWidth),
    y: generateRandomNumber(maxHeight),
  });

  const [to, setTo] = useState<Location>({
    x: generateRandomNumber(maxWidth),
    y: generateRandomNumber(maxHeight),
  });

  const [move, setMove] = useState(false);

  const [duration, setDuration] = useState(generateRandomNumber(5, 1, false));

  const initLocation = () => {
    setFrom({
      x: generateRandomNumber(maxWidth),
      y: generateRandomNumber(maxHeight),
    });

    setTo({
      x: generateRandomNumber(maxWidth),
      y: generateRandomNumber(maxHeight),
    });

    setDuration(generateRandomNumber(5, 1, false));

    setMove(false);
  };

  const handleStart = () => {
    setMove(true);
  };

  return (
    <Move
      from={from}
      to={to}
      duration={duration}
      onEnd={initLocation}
      onStart={handleStart}
      move={move}
      onClick={onClick}
    >
      {from.x > to.x ? <LeftFish /> : <RightFish />}
    </Move>
  );
};

export default Fish;
