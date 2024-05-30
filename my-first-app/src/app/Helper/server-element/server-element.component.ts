import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  AfterViewInit,
  SimpleChanges,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  /* Binding to custom Properties */

  //by default all properties of component are only accessable inside these component not from outside  ( @INPUT() )
  @Input() element: { type: string; name: string; content: string };
  @Input() name: string;

  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('Constructor called');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // console.log(changes.name.previousValue);
    // console.log(changes.name.currentValue);
    //data I got in changes console (element) that is the name of the @Input that you are using at top of the values (element)
    // console.log(changes.element.currentValue.name);
    console.log('ngOnChange called');

    //1. Called after a bound @Input property changes
    // throw new Error('Method not implemented.');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    //2. Called once the component is initialized
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
    //3. called during every chanegs detection run
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called');
    //4. called after component (<ng-content) has been projected into view
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called');
    //5. Called every time the projected content has been checked
  }

  ngAfterViewInit() {
    console.log('AfterViewInit called');
    //6. Called after the component's view and child views have been checked
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked called');
    //7. Called everytime the view and child views have been checked
  }

  ngOnDestroy(): void {
    console.log('OnDestroy called');
    //8. Called once the component is about to be destroyed
  }
}
