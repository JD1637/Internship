import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appEmployeeDirective]'
})
export class EmployeeDirectiveDirective {

  @Input() appEmployeeDirective = '';

  constructor(private el:ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor = "pink";
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = "";
  }
}


