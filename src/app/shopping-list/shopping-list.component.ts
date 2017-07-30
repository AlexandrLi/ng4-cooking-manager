import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from './../shared';
import { ShoppingListService } from './';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }
  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
