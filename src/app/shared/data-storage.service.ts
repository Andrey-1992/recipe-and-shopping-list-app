import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap, take, exhaustMap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://udemy-recipe-course-f2d4f-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => { console.log(response) })
  }

  fetchRecipes() {
    // return this.authService.user.pipe(
    // take(1), 
    // exhaustMap(user => {
    //   return this.http
      return this.http.get<Recipe[]>('https://udemy-recipe-course-f2d4f-default-rtdb.firebaseio.com/recipes.json?auth=?auth')
    .pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {  
            ...recipe, 
            ingredients: recipe.ingredients ? recipe.ingredients : []
          }
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes)
      })
    );
      // map(recipes => {
      //   return recipes.map(recipe => {
      //     return {  
      //       ...recipe, 
      //       ingredients: recipe.ingredients ? recipe.ingredients : []
      //     }
      //   });
      // })
    // .subscribe(recipes => {
    //   this.recipeService.setRecipes(recipes)
    // })
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