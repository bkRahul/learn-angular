import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  servers: { name: string }[] = [{ name: 'server 1' }];

  onServerAdded(server: string) {
    this.servers.push({ name: server });
  }

  onChangeStatus() {
    this.servers[0].name = 'changed';
  }

  onDeleteServer() {
    this.servers.splice(0, 1);
  }
}
