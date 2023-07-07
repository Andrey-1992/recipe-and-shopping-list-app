import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://udemy-recipe-course-f2d4f-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => { console.log(response) })
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://udemy-recipe-course-f2d4f-default-rtdb.firebaseio.com/recipes.json')
    .pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {  
            ...recipe, 
            ingredients: recipe.ingredients ? recipe.ingredients : []
          }
        });
      })
    )
    .subscribe(recipes => {
      this.recipeService.setRecipes(recipes)
    })
  }

  // fetchRecipes() {
  //   return this.http.get<Recipe[]>('https://udemy-recipe-course-f2d4f-default-rtdb.firebaseio.com/recipes.json')
  //   .pipe(map(recipes => {
  //     return recipes.map(recipe => {
  //       return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
  //       });
  //     }),
  //     tap(recipes => {
  //       this.recipeService.setRecipes(recipes)
  //     })
  //   )
  // }

  
};