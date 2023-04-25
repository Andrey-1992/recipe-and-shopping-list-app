import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  menuButtonValueOption:string ;

  getMenuOptionValue(menuOption) {
    this.menuButtonValueOption = menuOption
    // console.log('Testing values: ' + this.menuButtonValueOption)
    console.log(menuOption.srcElement.innerText)

  }
}
