import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  @Input('childRecipe') recipe: Recipe;
  // @Output('selectedRecipeValue') recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    // console.log(this.recipes)
  }
  
  onSelected() {
    // this.recipeSelected.emit(this.recipe);
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
  
}
