import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  // @Input('childRecipes') recipes: [{name: string, description:string, imgPath:string}];
  @Input('childRecipes') recipes: [Recipe];

  ngOnInit() {
    console.log(this.recipes)
  }
  
}
