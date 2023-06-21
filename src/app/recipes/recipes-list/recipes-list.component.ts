import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy{
  recipes: Recipe[];
  subscription: Subscription;
  
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute
  ) {}
  
  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      )
    this.recipes = this.recipeService.getRecipes();
    //Check this line of code, probably can be removed. 
  }
  
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}

// @Output('selectedRecipeValue') recipeValues = new EventEmitter<Recipe>();
// recipeValue:Recipe;
// onSelectedRecipe(recipeValue: Recipe) {
  // this.recipeValue = recipeValue;
  // console.log(this.recipeValue)
  // this.recipeValues.emit(recipeValue);
// }