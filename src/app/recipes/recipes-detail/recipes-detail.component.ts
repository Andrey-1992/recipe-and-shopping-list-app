import { Component, Input} from '@angular/core';
import { Recipe } from './../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent {

  @Input('childRecipe') recipe: Recipe;
  open:boolean = true;

  constructor(private recipeService: RecipeService) {}

  changeValue() {
    if (this.open) {
      this.open = false;
    } else {
      this.open = true;
    }
    console.log(this.open)
  }

  onAddShoppingList() {
    // console.log(this.recipe.ingredients)
    this.recipeService.addIngredientsToShoppinglist(this.recipe.ingredients)
  }

}
