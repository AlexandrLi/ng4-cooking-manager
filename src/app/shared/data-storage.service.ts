import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Recipe, RecipeService } from './../recipes';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

const baseURL = 'https://cooking-manager.firebaseio.com/';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.http.put(`${baseURL}/recipes.json`, this.recipeService.getRecipes())
  }

  getRecipes(): void {
    this.http.get(`${baseURL}/recipes.json`)
      .map((res: Response) => {
        const recipes: Recipe[] = res.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
