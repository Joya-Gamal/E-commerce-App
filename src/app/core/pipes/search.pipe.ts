import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Products: Array<Product>, term: string): Array<Product> {
    return Products.filter((product)=>(product.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())))
  }

}
