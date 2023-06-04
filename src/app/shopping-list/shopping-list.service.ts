import { Ingredient } from '../shared/ingredient.modle';
// import { EventEmitter } from '@angular/core';
import {  Subject} from 'rxjs';


export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  ingredients:Ingredient[] = [
    new Ingredient("Apples 🍎 ", "5"),
    new Ingredient("Tomatoes 🍅 ", "3")
  ];
  
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredientObject:Ingredient) {
    this.ingredients.push(ingredientObject);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
};

