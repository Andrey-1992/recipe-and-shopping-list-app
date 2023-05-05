import { Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2 } from '@angular/core';
@Directive({
  selector:'[appDropdown]'
})

export class DropdownDirective {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  
  constructor(private elementRef: ElementRef, private render: Renderer2) {}
  
  ngOnInit() {
    // this.render.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.render.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
    this.backgroundColor = this.highlightColor;
  } 

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.render.setStyl`e(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  } 


  // @HostListener('onClick') onClick(eventData: Event) {
  //   this.render.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
  // } 

}