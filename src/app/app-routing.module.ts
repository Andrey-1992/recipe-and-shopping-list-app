import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';


const appRoutes: Routes = [
  {path: '', component: RecipesComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'recipes', component: RecipesComponent}
];
@NgModule({

})
export class AppRoutingModule {
  
}