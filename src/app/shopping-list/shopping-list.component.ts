import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.modle';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients:Ingredient[]
  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy():void {
    this.igChangeSub.unsubscribe();
  }
  
}

// ingredients:Ingredient[] = [
//   new Ingredient("Apples 🍎 ", "5"),
//   new Ingredient("Tomatoes 🍅 ", "3")
// ];

// onPassedValue(ingredientObject) {
//   // console.log(ingredientObject);
//   this.ingredients.push(new Ingredient(ingredientObject.name, ingredientObject.amount));
// }