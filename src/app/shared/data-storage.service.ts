import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { Recipe, RecipeService } from './../recipes';
import { AuthService } from './../auth/auth.service';

const baseURL = 'https://cooking-manager.firebaseio.com/';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put(`${baseURL}/recipes.json?auth=${token}`, this.recipeService.getRecipes())
  }

  getRecipes(): void {
    const token = this.authService.getToken();
    this.http.get(`${baseURL}/recipes.json?auth=${token}`)
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
