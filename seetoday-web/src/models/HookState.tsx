import { makeAutoObservable } from 'mobx';

class HookState {
  horizontalPosition = 0;

  move = false;

  moveDirection: 'FORWARD' | 'BACKWARD' = 'FORWARD';

  isCatched = false;

  modalOpen = false;

  catchTimeoutInterval = -1;

  maxTimeoutInterval = -1;

  minTimeoutInterval = -1;

  maxWidth = 0;

  constructor() {
    makeAutoObservable(this);
    this.maxWidth = window.innerWidth / 2 - 25;
  }

  moveLeft = () => {
    if (this.horizontalPosition > -1 * this.maxWidth) {
      this.horizontalPosition -= 5;
    }
  };

  moveRight = () => {
    if (this.horizontalPosition < this.maxWidth) {
      this.horizontalPosition += 5;
    }
  };

  setMinTimeoutInterval = (minTimeoutInterval: number) => {
    this.minTimeoutInterval = minTimeoutInterval;
  };

  setMaxTimeoutInterval = (maxTimeoutInterval: number) => {
    this.maxTimeoutInterval = maxTimeoutInterval;
  };

  toggleMove = () => {
    if (this.catchTimeoutInterval < 0) {
      const timeoutInterval =
        Math.random() * (this.maxTimeoutInterval - this.minTimeoutInterval) +
        this.minTimeoutInterval;

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
