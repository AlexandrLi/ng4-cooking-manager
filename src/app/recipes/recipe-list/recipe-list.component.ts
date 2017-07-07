import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from './..';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a simply test',
      'http://images.media-allrecipes.com/userphotos/250x250/00/60/63/606388.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is another simply test',
      'http://images.media-allrecipes.com/userphotos/250x250/00/60/63/606325.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
