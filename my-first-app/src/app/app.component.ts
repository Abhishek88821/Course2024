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
}
