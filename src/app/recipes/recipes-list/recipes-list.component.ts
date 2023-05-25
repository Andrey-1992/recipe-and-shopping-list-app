import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
  recipes: Recipe[]
  
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute
  ) {}
  
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  
  onNewRecipe() {

  }
  
}

// @Output('selectedRecipeValue') recipeValues = new EventEmitter<Recipe>();
// recipeValue:Recipe;
// onSelectedRecipe(recipeValue: Recipe) {
  // this.recipeValue = recipeValue;
  // console.log(this.recipeValue)
  // this.recipeValues.emit(recipeValue);
// }