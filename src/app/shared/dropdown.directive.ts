import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector:'[appDropdown]'
})

export class DropdownDirective {
  constructor(private elementRef: ElementRef) {}
  
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "blue";
  }

}