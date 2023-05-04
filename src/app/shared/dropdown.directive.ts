import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
@Directive({
  selector:'[appDropdown]'
})

export class DropdownDirective {
  
  constructor(private elementRef: ElementRef, private render: Renderer2) {}
  
  ngOnInit() {
    this.render.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
  }
  
  @HostListener() mouseover() {

  }

}