import { Component } from '@angular/core';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', //Here I have converted app-servers selector to app-servers attribute
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  //ngModel
  ngModelData: string = '';

  //  String Interpolation
  serverId: number  = 10;
  serverStatus = 'Online';
  
  // Property Binding
  btnDisable: boolean = true;

  // Event Binding
  eventBindingText: string = `Server wasn't created`;


  //Passing Data
  dataPassing: string = 'Server Name';

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    setTimeout(() => {
      return this.btnDisable = false;
    }, 1000);
  }

  onEventBinding() {
    return this.eventBindingText = 'Server was created';
  }

  onUpdateServerName(event: Event) {
    // this.dataPassing = event.target.value;
        // this.dataPassing = (<HTMLInputElement>event.target).value;
        this.dataPassing = (event.target as HTMLInputElement).value;

    /*we use <HTMLInputElement> to cast event.target to an HTMLInputElement because 
      event.target is of type EventTarget, which doesn't have a value property.
      By casting it, you're informing TypeScript that event.target is an HTMLInputElement,
      which does have a value property.*/

  }

}
