import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './models/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://tse3.mm.bing.net/th?id=OIP.uuG8-kxLioSrFP-sY-LpuAHaHa&pid=Api&P=0&h=220'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://tse3.mm.bing.net/th?id=OIP.uuG8-kxLioSrFP-sY-LpuAHaHa&pid=Api&P=0&h=220'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://tse3.mm.bing.net/th?id=OIP.uuG8-kxLioSrFP-sY-LpuAHaHa&pid=Api&P=0&h=220'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://tse3.mm.bing.net/th?id=OIP.uuG8-kxLioSrFP-sY-LpuAHaHa&pid=Api&P=0&h=220')
  ];

  constructor() { }

  ngOnInit() {
  
  }

  onRecipeSelector(recipe: Recipe) {
    alert(recipe);
  }


}
