import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
  @Output('selectedRecipeValue') recipeValues = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) {}

  recipeValue:Recipe;
  recipes: Recipe[]

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }

  onSelectedRecipe(recipeValue: Recipe) {
    // this.recipeValue = recipeValue;
    // console.log(this.recipeValue)
    this.recipeValues.emit(recipeValue);
  }
}
