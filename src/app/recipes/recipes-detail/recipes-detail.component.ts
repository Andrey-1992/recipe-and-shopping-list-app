import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from './../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit{
  // @Input('childRecipe') recipe: Recipe;

  open:boolean = true;

  id: number;
  selectedRecipe: any;
  index: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // console.log(params)
          // console.log(params['id'])
          this.selectedRecipe = this.recipeService.getRecipe(this.id);
          this.index = +params['id'];
        }
      )
  }

  changeValue() {
    if (this.open) {
      this.open = false;
    } else {
      this.open = true;
    }
  }

  onAddShoppingList() {
    this.recipeService.addIngredientsToShoppinglist(this.selectedRecipe.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
