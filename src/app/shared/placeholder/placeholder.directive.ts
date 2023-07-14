import { Directive, ViewContainerRef } from "@angular/core";


@Directive({
  selector: '[appPlaceHolder]'
})
export class PlaceholderDirective {
  constructor(private viewContainerRef: ViewContainerRef) {}
}