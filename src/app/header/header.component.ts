import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  menuButtonValueOption:string ;
  @Output('testOutputAlias') menuButtonValue = new EventEmitter<string>();

  onSelect(menuOption) {
    console.log(menuOption.srcElement.innerText)
    const espanol = menuOption.srcElement.innerText
    this.menuButtonValue.emit(espanol)
  }
  
}

// @Output('testOutputAlias') menuButtonValue = new EventEmitter<string>();
// getMenuOptionValue(menuOption) {
//   console.log(menuOption.srcElement.innerText)
//   const espanol = menuOption.srcElement.innerText
//   this.menuButtonValue.emit(espanol)
// }