import { makeAutoObservable } from 'mobx';

class HookState {
  horizontalPosition = 0;

  move = false;

  moveDirection: 'FORWARD' | 'BACKWARD' = 'FORWARD';

  constructor() {
    makeAutoObservable(this);
  }

  moveLeft = () => {
    this.horizontalPosition -= 5;
  };

  moveRight = () => {
    this.horizontalPosition += 5;
  };

  toggleMove = () => {
    if (this.move) {
      if (this.moveDirection === 'FORWARD') this.moveDirection = 'BACKWARD';
      else this.moveDirection = 'FORWARD';
    }
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
