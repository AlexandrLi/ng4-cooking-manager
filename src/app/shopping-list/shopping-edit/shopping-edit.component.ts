import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';

import { Ingredient } from './../../shared/';
import { ShoppingListService } from './../';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingrName = this.nameInputRef.nativeElement.value;
    const ingrAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingrName, ingrAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
