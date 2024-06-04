import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css',
})
export class Assignment1Component {
  digits: number[] = [];
  startCount: number = 0;

  stopGame() {
    clearInterval(this.startCount);
  }

  startGame() {
    setInterval(()=> {
      this.digits.push(this.startCount + 1);
      this.startCount++;
    }, 1000)
  }
}
