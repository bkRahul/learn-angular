import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.css',
})
export class StatusComponent {
  // The @Input decorator is used to pass data from a parent component to a child component.
  @Input() serverName: { name: string };
}
