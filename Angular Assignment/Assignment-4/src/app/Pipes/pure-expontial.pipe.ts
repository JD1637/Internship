import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureExpontial',
  pure: true
})
export class PureExpontialPipe implements PipeTransform {

  transform(value: any , exponent=2): any {
    return Math.pow(value, exponent);
  }

}
