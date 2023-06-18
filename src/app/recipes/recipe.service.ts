import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.modle'
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
};