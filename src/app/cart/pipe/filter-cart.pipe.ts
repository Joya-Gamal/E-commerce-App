import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../interfaces/cart';

@Pipe({
  name: 'filterCart'
})
export class FilterCartPipe implements PipeTransform {

  transform(product:Products[]): Products[] {
    
    return product.filter((pro)=> pro.count > 0);
  }

}
