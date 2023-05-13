import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.modle'


export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'Simple Test 1',
      'https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg', 
      [
        new Ingredient('Meat', '2'),
        new Ingredient('Salami', '5'),
        new Ingredient('Cheese', '1'),
      ]),
    new Recipe(
      'A test recipe 2',
      'Simple Test 2',
      'https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg', 
      [
        new Ingredient('Lettuce', '2'),
        new Ingredient('Tomato', '10'),
        new Ingredient('Pinapple', '3'),
      ])
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppinglist(ingredients: Ingredient[]){
    console.log(ingredients)
  } 
};