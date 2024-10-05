import {
  OnDestroy,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

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
export class ServerComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterContentChecked,
    OnDestroy
{
  // @Input is used when property is used outside component
  // add an alias for property to use outside as server can be used only inside the server component
  @Input('singleServer') server: { name: string };
  @Input() name: string;
  @ViewChild('serverNameRef') serverName: ElementRef;
  @ContentChild('serverStatusRef') serverStatus: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    // console.log(
    //   'text content server name',
    //   this.serverName.nativeElement.textContent
    // );
    // console.log(
    //   'text content server status',
    //   this.serverStatus.nativeElement.textContent
    // );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log('changes', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log(
      'text content server status',
      this.serverStatus.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log(
      'text content server name',
      this.serverName.nativeElement.textContent
    );
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
