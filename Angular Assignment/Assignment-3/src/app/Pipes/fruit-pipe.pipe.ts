// import { style } from '@angular/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fruitPipe',
  pure: true,
})
export class FruitPipePipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }
  transform(value: any): SafeHtml {
    console.log('ki');

    return this.sanitized.bypassSecurityTrustHtml(`<span style="color:red;background-color : yellow">${value}%</span>`);
  }
}
