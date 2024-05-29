import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>App Components</h1>
  //   <hr />
  //   <app-server></app-server>
  //   <app-servers></app-servers>
  // `,
  styleUrl: './app.component.css',
  // styleUrls: ['./app.component.css', './app.component.css'],
  // styles: [
  //   `
  //     h1 {
  //       background: red;
  //       color: #fff;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'my-first-app';
  servers = ['TestServer', 'TestServer 2', 'TestServer 3'];

  /* Binding to custom Properties */
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just a Test' },
  ];


  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  

}
