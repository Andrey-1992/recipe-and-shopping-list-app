import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.modle';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  ingredientName:string;
  ingredientAmount:string;
  @Output('ingredientObject') outputIngValue = new EventEmitter<Ingredient>();

  incomningNameInput(event: Event) {
    this.ingredientName = (<HTMLInputElement>event.target).value
    // console.log(this.ingredientName)
  }

  incomningAmountInput(event: Event) {
    this.ingredientAmount = (<HTMLInputElement>event.target).value
    // console.log(this.ingredientAmount)
  }

  submitIngredients(localIngredientName) {
    event.preventDefault()
    console.log(localIngredientName.value)
    this.outputIngValue.emit({
      name: this.ingredientName,
      amount: this.ingredientAmount
    });
  }
}
