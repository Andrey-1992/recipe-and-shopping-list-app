import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.modle';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  // @ViewChild('localIngredientAmount') localIngredientAmount: ElementRef;
  @ViewChild('formObj') ingredientsForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editItem: Ingredient;
  
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editItem = this.shoppingListService.getIngredient(index);
          this.ingredientsForm.setValue({
            ingredientName: this.editItem.name,
            ingredientAmount: this.editItem.amount
          })
        }
      );
  }
  
  onSubmit(formObj: NgForm) {
    const value = formObj.value;
    // console.log(value)
    const newIngredient = new Ingredient(value.ingredientName, value.ingredientAmount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    formObj.reset()
  }

  deleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.clearForm();
  }

  clearForm() {
    this.ingredientsForm.reset();
    this.editMode = false;
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
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