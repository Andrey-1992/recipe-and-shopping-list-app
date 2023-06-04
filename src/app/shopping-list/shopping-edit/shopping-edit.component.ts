import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

import { Ingredient } from '../../shared/ingredient.modle';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  // @Output('ingredientObject') outputIngValue = new EventEmitter<Ingredient>();
  @ViewChild('localIngredientAmount') localIngredientAmount: ElementRef;
  @ViewChild('formObj') ingredientsForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    console.log(this.ingredientsForm)
  }
  
  // onAddItem(localIngredientName:HTMLInputElement) {
  //   event.preventDefault()
  //   this.shoppingListService.addIngredient({
  //     name: localIngredientName.value,
  //     amount: this.localIngredientAmount.nativeElement.value
  //   });
  // }
  onAddItem() {
    event.preventDefault()
    // console.log(this.ingredientsForm.controls.ingredientName.value)
    this.shoppingListService.addIngredient({
      name: this.ingredientsForm.controls.ingredientName.value,
      amount: this.ingredientsForm.controls.ingredientAmount.value,
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


// Lines of Code when we use EventEmitter:
// console.log(localIngredientName.value)
// this.outputIngValue.emit({
//   amount: this.localIngredientAmount.nativeElement.value
// });