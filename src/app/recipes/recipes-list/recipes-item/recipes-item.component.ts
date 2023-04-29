import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  testValue:Recipe;
  @Input('childRecipe') recipe: Recipe;
  @Output('selectedRecipeValue') recipeValues = new EventEmitter<Recipe>();

  ngOnInit() {
    // console.log(this.recipes)
  }
  
  captureRecipeValues(recipe) {
    // this.recipeValues = recipe;
    this.testValue =this.recipe;
    
    this.recipeValues.emit(this.testValue);

    console.log(this.recipe)
    console.log(this.recipeValues)
  }
  
}
