import React, { useState } from 'react';
import waterDropImage1 from 'assets/water-drop-1.png';
import waterDropImage2 from 'assets/water-drop-2.png';
import waterDropImage3 from 'assets/water-drop-3.png';
import waterDropImage4 from 'assets/water-drop-4.png';
import waterDropImage5 from 'assets/water-drop-5.png';
import waterDropImage6 from 'assets/water-drop-6.png';
import waterDropImage7 from 'assets/water-drop-7.png';
import waterDropImage8 from 'assets/water-drop-8.png';
import Move from 'components/background/Move';
import { Location } from 'types/location.d';
import generateRandomNumber from 'utils/generateRandomNumber';

const waterDropImages = [
  <img key={1} src={waterDropImage1} />,
  <img key={2} src={waterDropImage2} />,
  <img key={3} src={waterDropImage3} />,
  <img key={4} src={waterDropImage4} />,
  <img key={5} src={waterDropImage5} />,
  <img key={6} src={waterDropImage6} />,
  <img key={7} src={waterDropImage7} />,
  <img key={8} src={waterDropImage8} />,
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
