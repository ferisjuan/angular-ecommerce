import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.model';

@Pipe({
  name: 'filterAvailable',
})
export class FilterAvailablePipe implements PipeTransform {
  transform(products: Product[], isFiltered: boolean): Product[] {
    if (isFiltered) {
      return products.slice().filter(product => product.available);
    }
    return products;
  }
}
