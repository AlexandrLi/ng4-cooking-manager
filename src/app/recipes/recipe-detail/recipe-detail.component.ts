import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe, RecipeService } from './../';
import { ShoppingListService } from './../../shopping-list';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(+params['id']);
      });
  }
  onAddToShoppingList() {
    this.recipe.ingredients
      .forEach((item) => this.shoppingListService.addIngredient(item));
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
