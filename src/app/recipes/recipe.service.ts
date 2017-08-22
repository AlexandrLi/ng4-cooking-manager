import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './';
import { Ingredient } from './../shared';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];
  constructor() { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
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
