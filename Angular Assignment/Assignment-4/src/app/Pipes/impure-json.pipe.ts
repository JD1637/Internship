import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureJSON',
  pure:false
})
export class ImpureJSONPipe implements PipeTransform {
  transform(value:any): any {
      return JSON.stringify(value)
  }
}
