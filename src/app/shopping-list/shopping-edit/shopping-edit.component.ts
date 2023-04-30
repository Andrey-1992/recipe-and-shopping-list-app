import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.modle';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output('ingredientObject') outputIngValue = new EventEmitter<Ingredient>();
  @ViewChild('localIngredientAmount') localIngredientAmount: ElementRef;
  
  submitIngredients(localIngredientName:HTMLInputElement) {
    event.preventDefault()
    // console.log(localIngredientName.value)
    this.outputIngValue.emit({
      name: localIngredientName.value,
      amount: this.localIngredientAmount.nativeElement.value
    });
  }
}



// Lines of code for when we are not using Local Reference and get are getting values from the inputs fields.
// ingredientName:string;
// ingredientAmount:string;
//
// incomningNameInput(event: Event) {
//   this.ingredientName = (<HTMLInputElement>event.target).value
//   // console.log(this.ingredientName)
// }

// incomningAmountInput(event: Event) {
//   this.ingredientAmount = (<HTMLInputElement>event.target).value
//   // console.log(this.ingredientAmount)
// }