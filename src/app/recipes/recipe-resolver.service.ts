import { Injectable } from '@angular/core'

@Injectable({providedIn: 'root'})
export class RecipeResolverService {
// export class RecipeResolverService implements Resolve<Recipe[]> {
//   constructor(private dataStorageService: DataStorageService, private recipeSerivice: RecipeService) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const recipes = this.recipeSerivice.getRecipes();

//     if(recipes.length === 0) {
//       return this.dataStorageService.fetchRecipes();
//     } else {
//       return recipes;
//     }
//   }


}