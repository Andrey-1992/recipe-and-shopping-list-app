import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modle';

export class ShoppingListService {
  ingredients:Ingredient[] = [
    new Ingredient("Apples 🍎 ", "5"),
    new Ingredient("Tomatoes 🍅 ", "3")
  ];
  
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredientObject:Ingredient) {
    this.ingredients.push(ingredientObject);
  }
};

