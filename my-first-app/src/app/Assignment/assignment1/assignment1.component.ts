import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css',
})
export class Assignment1Component {
  lastNumber: number = 0;

  digits: number[] = [];

  startGame() {
    setInterval(() => {
      this.digits.push(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.lastNumber);
  }
}
