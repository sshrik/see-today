import { makeAutoObservable } from 'mobx';

class HookState {
  horizontalPosition = 0;

  move = false;

  moveDirection: 'FORWARD' | 'BACKWARD' = 'FORWARD';

  isCatched = false;

  modalOpen = false;

  catchTimeoutInterval = -1;

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
    if (this.catchTimeoutInterval < 0) {
      const timeoutInterval = Math.random() * 2 + 1;

      this.catchTimeoutInterval = timeoutInterval;

      setTimeout(() => {
        this.catchFish();
        if (this.move) {
          this.toggleMove();
        }
      }, timeoutInterval * 1000);
    }

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

  openModal = () => {
    this.modalOpen = true;
  };

  catchFish = () => {
    this.isCatched = true;
  };

  releaseFish = () => {
    this.modalOpen = false;
    this.isCatched = false;
    this.catchTimeoutInterval = -1;
    this.moveForward();
    this.move = false;
    this.horizontalPosition = 0;
  };
}

export default new HookState();
