import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modle';

export class ShoppingListService {
  ingredients:Ingredient[] = [
    new Ingredient("Apples 🍎 ", "5"),
    new Ingredient("Tomatoes 🍅 ", "3")
  ];
  outputIngValue = new EventEmitter<Ingredient>();

  onPassedValue(ingredientObject) {
    // console.log(ingredientObject);
    this.ingredients.push(new Ingredient(ingredientObject.name, ingredientObject.amount));
  }
};

