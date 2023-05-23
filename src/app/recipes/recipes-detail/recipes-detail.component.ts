import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from './../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit{
  // @Input('childRecipe') recipe: Recipe;

  open:boolean = true;

  selectedRecipe:Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe
        // console.log(this.selectedRecipe)
      }
    )
  }

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
    this.recipeService.addIngredientsToShoppinglist(this.selectedRecipe.ingredients)
  }

}
