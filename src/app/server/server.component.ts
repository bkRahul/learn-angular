import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  //declare selector (css) where we can use the component in other component files, can also use classname, attribute
  selector: 'app-server',
  //url for html file of the component
  templateUrl: './server.component.html',
  //url for style of the component
  styleUrl: './server.component.css',
  //provide encapsulated styling for the component
  encapsulation: ViewEncapsulation.None,
})
export class ServerComponent {
  // @Input is used when property is used outside component
  // add an alias for property to use outside as server can be used only inside the server component
  @Input('singleServer') server: string;
}
