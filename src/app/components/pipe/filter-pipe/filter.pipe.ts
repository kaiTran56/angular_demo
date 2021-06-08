import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(product: any[], id: string, name: string, status: string): any {
    if (!id && !name && !status) {
      return product;
    } else {
      if (id) {        
        product = product.filter(x => {
          return x.id == id;
        });
      }
      if (name) {
        product = product.filter(x=>{
          return x.name.toLowerCase().indexOf(name.toLowerCase()) !=-1;
        });
      }
      if (status) {
        product = product.filter(x =>{
          return x.status.toString().toLowerCase().indexOf(status.toLowerCase())!=-1;
        });
      }
      return product;
    }
  }

}
