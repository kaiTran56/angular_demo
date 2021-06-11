import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(value: number[], sortOption: number): any {
    
    var result = value.sort((a,b)=>{
      if(a>b) return sortOption;
      else if(a<b) return -sortOption;
      else return 0;
    });

    return [...result];
  }

}
