import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent implements OnInit {
  /* Binding to custom Properties */

  //by default all properties of component are only accessable inside these component not from outside  ( @INPUT() )
  @Input() element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit() {}
}
