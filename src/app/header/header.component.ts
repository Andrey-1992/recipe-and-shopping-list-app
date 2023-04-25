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
    // console.log(menuOption.srcElement.innerText)

    this.menuButtonValueOption = menuOption.srcElement.innerText;
    console.log('Testing values: ' + this.menuButtonValueOption)

  }
}
