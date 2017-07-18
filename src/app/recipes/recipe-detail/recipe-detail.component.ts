import { Component, Input } from '@angular/core';

import { Recipe } from './../';
import { ShoppingListService } from './../../shopping-list';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() currentRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  onAddToShoppingList() {
    this.currentRecipe.ingredients
      .forEach((item) => this.shoppingListService.addIngredient(item));
  }

}
