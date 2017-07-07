import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './../';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() currentRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
