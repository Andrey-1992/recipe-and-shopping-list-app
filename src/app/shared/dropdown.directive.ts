import { Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  OnInit, 
  Renderer2 } from '@angular/core';
@Directive({
  selector:'[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  
  constructor(private elementRef: ElementRef, private render: Renderer2) {}
  
  ngOnInit() {
    // this.render.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.render.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
    this.backgroundColor = 'green';
  } 

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.render.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = 'transparent';
  } 


  // @HostListener('onClick') onClick(eventData: Event) {
  //   this.render.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
  // } 

}