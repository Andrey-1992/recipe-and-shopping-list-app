import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;

  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  // @Output('internalFeatureSelected') featureSelected = new EventEmitter<string>();
  // onSelect(feature) {
  //   // console.log(feature.srcElement.innerText)
  //   const convertedValue = feature.srcElement.innerText
  //   this.featureSelected.emit(convertedValue)
  // }
}
