import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  servers: string[] = ['server 1', 'server 2'];
  onServerAdded(server: string) {
    this.servers.push(server);
  }
}
