import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  @Output('selectedRecipeValue') recipeValues = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) {}

  recipeValue:Recipe;
  recipes: Recipe[] = [
    new Recipe('A test recipe 1','Simple Test 1','https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg'),
    new Recipe('A test recipe 2','Simple Test 2','https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg')
  ];

  

  onSelectedRecipe(recipeValue: Recipe) {
    // this.recipeValue = recipeValue;
    // console.log(this.recipeValue)
    this.recipeValues.emit(recipeValue);
  }
}
