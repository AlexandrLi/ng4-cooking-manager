import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './';
import { Ingredient } from './../shared';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Ultimate chocolate cake',
      'Indulge yourself with this heavenly chocolate cake that is beautifully moist, rich and fudgy. Perfect for a celebration, or an afternoon tea with friends',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1043451_11.jpg?itok=Z_w2WOYB',
      [
        new Ingredient('Dark chocolate', 200),
        new Ingredient('Butter', 200),
        new Ingredient('Self-raising flour', 85)
      ]
    ),
    new Recipe(
      2,
      'Spicy root & lentil casserole',
      'The potatoes in this recipe take on the spicy flavours beautifully - our idea of the perfect veggie supper',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1',
      [
        new Ingredient('Onion', 1),
        new Ingredient('Garlic clove', 2),
        new Ingredient('Potatoes', 10),
        new Ingredient('Carrot', 4)
      ]
    )
  ];
  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.find((item: Recipe) => item.id === id);
  }

  addRecipe(newRecipe: Recipe): Recipe {
    newRecipe.id = Math.round(Math.random() * 1000 + 1);
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
    return newRecipe;
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    const index = this.recipes.findIndex(item => item.id === newRecipe.id);
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter(item => item.id !== id);
    this.recipesChanged.next(this.recipes.slice());
  }
}
