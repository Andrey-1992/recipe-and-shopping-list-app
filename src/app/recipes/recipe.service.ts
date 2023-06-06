import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.modle'
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'Simple Test 1',
      'https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg', 
      [
        new Ingredient('Meat', 2),
        new Ingredient('Salami', 5),
        new Ingredient('Cheese', 1),
      ]),
    new Recipe(
      'A test recipe 2',
      'Simple Test 2',
      'https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg', 
      [
        new Ingredient('Lettuce', 1),
        new Ingredient('Tomato', 10),
        new Ingredient('Pinapple', 3),
      ])
  ];
  // recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
    // console.log(this.recipes.slice()[index])
  }

  addIngredientsToShoppinglist(ingredients: Ingredient[]){
    // console.log(ingredients)
    this.slService.addIngredients(ingredients)
  } 
};