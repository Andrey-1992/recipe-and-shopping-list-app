import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  @Input('childRecipes') recipes: [{name: string, description:string, imgPath:string}] ;

  // ngOnInit() {
  // }
  
}
