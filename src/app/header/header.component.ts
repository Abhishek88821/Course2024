import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-header, autocomplete-basic-demo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html, ./autocomplete-basic-demo.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

export class AutocompleteBasicDemo {
  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] | undefined;

  search(event: AutoCompleteCompleteEvent) {
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
}