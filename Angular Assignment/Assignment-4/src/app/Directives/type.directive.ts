import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appType]'
})
export class TypeDirective {

  constructor() { }
  @Input() appType:any;

  @HostBinding('style.color') color:any;
  @HostBinding('style.backgroundColor ') bg:any

  ngOnInit(){
    switch (this.appType) {
      case 'electric':
        this.color='orange';
        this.bg = 'green'
        break;
      
      case 'plastic':
        this.color='blue';
        this.bg = 'pink'
        break;
    
      default:
        this.color='red';
        this.bg = "yellow"
        break;
    }
  }
}
