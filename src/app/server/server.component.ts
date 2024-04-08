import { Component } from '@angular/core';

@Component({
  //declare selector where we can use the component in other component files, can also use classname, attribute
  selector: 'app-server',
  //url for html file of the component
  templateUrl: './server.component.html',
  //url for style of the component
  styleUrl: './server.component.css',
})
export class ServerComponent {}
