import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modle';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit{
  ingredients:Ingredient[]

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
  }
  
}

// ingredients:Ingredient[] = [
//   new Ingredient("Apples 🍎 ", "5"),
//   new Ingredient("Tomatoes 🍅 ", "3")
// ];

// onPassedValue(ingredientObject) {
//   // console.log(ingredientObject);
//   this.ingredients.push(new Ingredient(ingredientObject.name, ingredientObject.amount));
// }