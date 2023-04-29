import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  recipeValue:Recipe;

  onSelectedRecipe(recipeValue) {
    this.recipeValue = recipeValue;
    console.log(this.recipeValue)
    // this.recipeValues.emit(recipeValue);
  }

}
