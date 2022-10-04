import { makeAutoObservable } from 'mobx';

class HookState {
  horizontalPosition = 0;

  move = false;

  moveDirection: 'FORWARD' | 'BACKWARD' = 'FORWARD';

  constructor() {
    makeAutoObservable(this);
  }

  moveLeft = () => {
    this.horizontalPosition -= 2;
  };

  moveRight = () => {
    this.horizontalPosition += 2;
  };

  toggleMove = () => {
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
