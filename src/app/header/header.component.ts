import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  // @Output('internalFeatureSelected') featureSelected = new EventEmitter<string>();
  // onSelect(feature) {
  //   // console.log(feature.srcElement.innerText)
  //   const convertedValue = feature.srcElement.innerText
  //   this.featureSelected.emit(convertedValue)
  // }
  
}
