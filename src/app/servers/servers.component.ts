import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
    `
      div {
        border: 1px solid blue;
        padding: 8px 12px;
      }
    `,
  ],
})
export class ServersComponent {
  serverStatus = false;
  serverName = '';
  serverCreationStatus = '';
  servers = [];

  // @Output decorator makes the serverCreated event available to the parent component.
  // EventEmitter is used to emit own events it can be typed with a generic type to indicate the
  // kind of data it will emit.
  @Output() serverCreated = new EventEmitter<string>();
  constructor() {
    this.serverStatus = true;
  }

  onAddServer(serverNameInput) {
    this.servers.push(serverNameInput.value);
    // Use the emit method of the EventEmitter to send data to the parent component.
    this.serverCreated.emit(serverNameInput.value);
  }

  toggleServerStatus() {
    this.serverStatus = !this.serverStatus;
  }

  getServerStatusColor() {
    return this.serverStatus ? 'green' : 'red';
  }

  // one way data binding
  // handleAddServer(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
