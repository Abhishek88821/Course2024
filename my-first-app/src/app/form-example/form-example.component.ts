import { Component } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.css'
})
export class FormExampleComponent {
  data: string = '';
  showData: boolean = false;

  showDataBtn() {
    this.showData = true;
  }

}
