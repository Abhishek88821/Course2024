import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CockpitComponent implements OnInit {

  // @ViewChild('localReference') localRefrenceView;
  @ViewChild('localReference') localRefrenceView : ElementRef;

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // @Output() bluePrintCreated = new EventEmitter<{
  //   serverName: string;
  //   serverContent: string;
  // }>();


/* Inside the ('bpCreated') of output is called alias, we can create alias in @Output and @Input */
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  newServerName = '';
  newServerContent = '';

  constructor() {}
  ngOnInit(): void {}

  /* Output Emit */
  onAddServer(localReference: HTMLInputElement /* Local Reference */) {
    // console.log(localReference.value);
    // alert(this.localRefrenceView);
    console.log(this.localRefrenceView.nativeElement.value); //We can also use viewchild for showing data by localReference
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }


}
