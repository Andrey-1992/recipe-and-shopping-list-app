import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  serverName:string;

  testInput(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
    console.log(this.serverName)
  }

}
