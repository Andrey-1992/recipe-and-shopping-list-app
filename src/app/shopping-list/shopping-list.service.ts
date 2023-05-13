import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modle';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredients:Ingredient[] = [
    new Ingredient("Apples 🍎 ", "5"),
    new Ingredient("Tomatoes 🍅 ", "3")
  ];
  
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredientObject:Ingredient) {
    this.ingredients.push(ingredientObject);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    // console.log(ingredients)
    for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
  }
};

