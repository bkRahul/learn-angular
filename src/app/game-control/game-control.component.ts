import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  num = 0;
  onStart() {
    this.interval = setInterval(() => {
      console.log('start', this.num++);
      this.intervalFired.emit(this.num);
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }
}
