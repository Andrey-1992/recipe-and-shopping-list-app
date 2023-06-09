import { Ingredient } from '../shared/ingredient.modle';
// import { EventEmitter } from '@angular/core';
import {  Subject} from 'rxjs';


export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients:Ingredient[] = [
    new Ingredient("Apples 🍎 ", 5),
    new Ingredient("Tomatoes 🍅 ", 3)
  ];
  
  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredientObject:Ingredient) {
    this.ingredients.push(ingredientObject);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index:number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index:number) {
    this.ingredientsChanged.next(this.ingredients.slice(index, 1))
  }
};

