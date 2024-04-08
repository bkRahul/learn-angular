import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
    `
      div {
        border: 1px solid blue;
        padding: 10px 15px;
      }
    `,
  ],
})
export class ServersComponent {
  serverStatus = 'online';
  allowNewServer = true;
  constructor() {
    setTimeout(() => {
      this.serverStatus = 'offline';
      this.allowNewServer = false;
    }, 5000);
  }
}
