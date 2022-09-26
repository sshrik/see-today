import { makeAutoObservable } from 'mobx';

class HookState {
  degree = 0;

  move = false;

  moveDirection: 'FORWARD' | 'BACKWARD' = 'FORWARD';

  constructor() {
    makeAutoObservable(this);
  }

  turnLeft = () => {
    this.degree += 2;
  };

  turnRight = () => {
    this.degree -= 2;
  };

  toggleMove = () => {
    console.log(this);
    this.move = !this.move;
  };

  moveForward = () => {
    this.moveDirection = 'FORWARD';
  };

  moveBackward = () => {
    this.moveDirection = 'BACKWARD';
  };
}

export default new HookState();
