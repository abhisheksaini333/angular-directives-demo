import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMycustomdirective]'
})
export class MycustomdirectiveDirective {

  constructor(private eleRef: ElementRef) { 

  }

  @HostListener('mouseenter') onEnter() {
    this.eleRef.nativeElement.style.background = 'gray';
    this.eleRef.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave') onLeave() {
    this.eleRef.nativeElement.style.background = 'initial';
    this.eleRef.nativeElement.style.color = 'initial';
  }

}
