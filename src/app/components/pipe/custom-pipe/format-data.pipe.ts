import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FormatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(value: string, start: number, end:number): unknown {
    return value.substring(start, end)+"...";
  }

}
