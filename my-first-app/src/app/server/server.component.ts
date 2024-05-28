import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverName: string;
  servers = [];
  

  ngForButton() {
    const data = new Date()  + ' : ' + this.serverName;
    this.servers.push(data);
    this.serverName = '';
  }
}
