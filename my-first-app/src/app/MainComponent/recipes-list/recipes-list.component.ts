import { Component } from '@angular/core';
import { Recipe } from './models/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://kentrollins.com/wp-content/uploads/2018/07/refried-bean-recipe.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://kentrollins.com/wp-content/uploads/2018/07/refried-bean-recipe.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://kentrollins.com/wp-content/uploads/2018/07/refried-bean-recipe.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://kentrollins.com/wp-content/uploads/2018/07/refried-bean-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  
  }


}
