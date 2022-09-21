import React, { useState } from 'react';
import waterDropImage1 from 'assets/water-drop-1.png';
import waterDropImage2 from 'assets/water-drop-2.png';
import waterDropImage3 from 'assets/water-drop-3.png';
import Move from 'components/background/Move';
import { Location } from 'types/location.d';
import generateRandomNumber from 'utils/generateRandomNumber';

const waterDropImages = [
  <img key={1} src={waterDropImage1} />,
  <img key={2} src={waterDropImage2} />,
  <img key={3} src={waterDropImage3} />,
];

const WaterDrop: React.FC = () => {
  const { innerWidth: maxWidth, innerHeight: maxHeight } = window;

  const [from, setFrom] = useState<Location>({
    x: generateRandomNumber(maxWidth - 10, 10),
    y: generateRandomNumber(240, 40),
  });

  const [move, setMove] = useState(false);

  const [imageSrc, setImageSrc] = useState(
    waterDropImages[generateRandomNumber(7)]
  );

  const [duration, setDuration] = useState(generateRandomNumber(5, 1, false));

  const initLocation = () => {
    setFrom({
      x: generateRandomNumber(maxWidth - 10, 10),
      y: generateRandomNumber(240, 40),
    });

    setDuration(generateRandomNumber(5, 1, false));

    setImageSrc(waterDropImages[generateRandomNumber(7)]);

    setMove(false);
  };

  const handleStart = () => {
    setMove(true);
  };

  return (
    <Move
      from={from}
      to={{ x: from.x, y: maxHeight }}
      duration={duration}
      onEnd={initLocation}
      onStart={handleStart}
      move={move}
    >
      {imageSrc}
    </Move>
  );
};

export default WaterDrop;
