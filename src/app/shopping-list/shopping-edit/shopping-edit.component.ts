import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

import { Ingredient } from '../../shared/ingredient.modle';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  // @ViewChild('localIngredientAmount') localIngredientAmount: ElementRef;
  @ViewChild('formObj') ingredientsForm: NgForm;
  
  constructor(private shoppingListService: ShoppingListService) {}
  
  onAddItem() {
    event.preventDefault()
    // console.log(this.ingredientsForm)
    this.shoppingListService.addIngredient({
      name: this.ingredientsForm.controls.ingredientName.value,
      amount: this.ingredientsForm.controls.ingredientAmount.value,
    });
  }

  clearForm() {
    // console.log(this.ingredientsForm)
    this.ingredientsForm.reset();
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
  
// @Output('ingredientObject') outputIngValue = new EventEmitter<Ingredient>();
// incomningAmountInput(event: Event) {
//   this.ingredientAmount = (<HTMLInputElement>event.target).value
//   // console.log(this.ingredientAmount)
// }


// Lines of Code when we use EventEmitter:
// console.log(localIngredientName.value)
// this.outputIngValue.emit({
//   amount: this.localIngredientAmount.nativeElement.value
// });


// Previous solution to create new ingredietns without usgin the FormControl Approach:g
 // onAddItem(localIngredientName:HTMLInputElement) {
  //   event.preventDefault()
  //   this.shoppingListService.addIngredient({
  //     name: localIngredientName.value,
  //     amount: this.localIngredientAmount.nativeElement.value
  //   });
  // }