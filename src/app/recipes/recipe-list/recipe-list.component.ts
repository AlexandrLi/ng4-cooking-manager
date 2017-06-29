import { Component, OnInit } from '@angular/core';

import { Recipe } from './..';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'http://images.media-allrecipes.com/userphotos/250x250/00/60/63/606388.jpg'),
    new Recipe('A Test Recipe', 'This is a simply test', 'http://images.media-allrecipes.com/userphotos/250x250/00/60/63/606388.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
