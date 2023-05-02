import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFruitDirective]'
})
export class FruitDirectiveDirective {

  @Input() appFruitDirective = ''
  constructor(private el:ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appFruitDirective);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  
}
