import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Ultimate chocolate cake',
      'Indulge yourself with this heavenly chocolate cake that is beautifully moist, rich and fudgy. Perfect for a celebration, or an afternoon tea with friends',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1043451_11.jpg?itok=Z_w2WOYB'
    ),
    new Recipe(
      'Spicy root & lentil casserole',
      'The potatoes in this recipe take on the spicy flavours beautifully - our idea of the perfect veggie supper',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1'
    )
  ];
  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
