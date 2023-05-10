import { Recipe } from './recipe.model';


export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe 1','Simple Test 1','https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg'),
    new Recipe('A test recipe 2','Simple Test 2','https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg')
  ];

  getRecipes() {
    return this.recipes;
  }
};