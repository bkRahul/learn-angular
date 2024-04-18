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
  serverStatus = false;
  serverName = '';
  serverCreationStatus = '';
  servers = [];
  constructor() {
    setTimeout(() => {
      this.serverStatus = true;
    }, 5000);
  }

  toggleServerStatus() {
    this.serverStatus = !this.serverStatus;
  }

  onServerCreateHandler() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created with name ${this.serverName}`;
  }

  getServerStatusColor() {
    return this.serverStatus ? 'green' : 'red';
  }

  // one way data binding
  // handleAddServer(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
