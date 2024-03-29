import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  collapsed = true;
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}
  
  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    });
  }
  
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  
  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }
 
  onLogout() {
    this.authService.logout();
  }
  
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
  // @Output('internalFeatureSelected') featureSelected = new EventEmitter<string>();
  // onSelect(feature) {
  //   // console.log(feature.srcElement.innerText)
  //   const convertedValue = feature.srcElement.innerText
  //   this.featureSelected.emit(convertedValue)
  // }
}
