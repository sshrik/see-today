import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useInterval } from 'usehooks-ts';
import HookImgSrc from 'assets/hook.png';
import HookState from 'models/HookState';

const Hook: React.FC = observer(() => {
  const { degree, move, moveDirection } = HookState;

  const [top, setTop] = useState(-360);

  useInterval(() => {
    if (move) {
      if (moveDirection === 'FORWARD') setTop(top + 10);
      else setTop(top - 10);
    }
  }, 50);

  return (
    <img
      style={{
        transform: `rotate(${degree}deg)`,
        transformOrigin: 'center top',
        objectFit: 'contain',
        width: '80px',
        position: 'absolute',
        left: 'calc(50% - 60px)',
        top: `${top}px`,
      }}
      src={HookImgSrc}
    />
  );
});

export default Hook;
