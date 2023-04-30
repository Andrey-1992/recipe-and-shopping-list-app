import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  ingredientName:string;
  ingredientAmount:string;

  incomningNameInput(event: Event) {
    this.ingredientName = (<HTMLInputElement>event.target).value
    // console.log(this.ingredientName)
  }

  incomningAmountInput(event: Event) {
    this.ingredientAmount = (<HTMLInputElement>event.target).value
    // console.log(this.ingredientAmount)
  }

  submitIngredients() {
    console.log(this.ingredientAmount);
    console.log(this.ingredientName);
  }
}
