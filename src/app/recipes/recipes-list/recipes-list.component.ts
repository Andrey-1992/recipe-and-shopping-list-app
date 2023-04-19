import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {

  recipes: Recipe[] = [
    new Recipe('A test recipe','Simple Test','https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg'),
    new Recipe('A test recipe','Simple Test','https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg')
  ];
  test0 = this.recipes[0].name
  test1 = this.recipes[0].name
  test2 = this.recipes[0].imgPath

}
