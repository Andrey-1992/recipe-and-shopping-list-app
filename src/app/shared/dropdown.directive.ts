import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector:'[appDropdown]'
})

export class DropdownDirective {
  constructor(private elementRef: ElementRef) {

  }

}