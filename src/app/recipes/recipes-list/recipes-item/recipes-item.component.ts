import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  // @Output('selectedRecipeValue') recipeSelected = new EventEmitter<Recipe>();
  @Input('childRecipe') recipe: Recipe;
  @Input('childRecipeNum') recipeNum: number;

  constructor(private recipeService: RecipeService,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    // console.log(this.recipeNum)
  }
  
  onSelected() {
    // this.recipeSelected.emit(this.recipe);
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
    // this.router.navigate(['/recipes', this.recipeNum], {queryParams: {allowEdit: this.recipeNum}, fragment: 'loading'})
    this.router.navigate([this.recipeNum], {relativeTo: this.activatedRoute})
  }
  
}
