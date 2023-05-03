import { Component, Input} from '@angular/core';
import { Recipe } from './../recipe.model';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent {
  @Input('childRecipe') recipe: Recipe;
  open:boolean = true;

  changeValue() {
    this.open = !false;
    console.log(this.open)
  }

}
