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
    if (this.open) {
      this.open = false;
    } else {
      this.open = true;
    }
    console.log(this.open)
  }

}
