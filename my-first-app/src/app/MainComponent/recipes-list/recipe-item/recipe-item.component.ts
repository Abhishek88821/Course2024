import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeP') recipeItem: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();


  ngOnInit() {

  }

  onSelected() {
    this.recipeSelected.emit();
  }

}
