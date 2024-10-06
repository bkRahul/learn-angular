import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() {
    console.log(this.oddNumbers, this.evenNumbers);
  }

  onIntervalFired(val) {
    if (val % 2 === 0) this.oddNumbers.push(val);
    else this.evenNumbers.push(val);
  }
}
