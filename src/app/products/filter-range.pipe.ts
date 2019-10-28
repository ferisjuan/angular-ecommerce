import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.model';

@Pipe({
  name: 'filterRange',
})
export class FilterRangePipe implements PipeTransform {
  transform(
    products: Product[],
    criteria: string,
    range: string
  ): Product[] {
    const reg = new RegExp(/[^0-9]/g);
    switch (range) {
      case 'Menor a 99':
        return products.slice().filter(product => {
          const value = this.correctValue(product, criteria, reg);
          return value < 100;
        });
      case 'De 100 a 999':
        return products.slice().filter(product => {
          const value = this.correctValue(product, criteria, reg);
          return value >= 100 && value < 1000;
        });
      case 'Mayor a 1000':
        return products.slice().filter(product => {
          const value = this.correctValue(product, criteria, reg);
          return value >= 1000;
        });
      default:
        return products;
    }
  }
  // es necesario corregir el valor que viene en cadena para reutilizar el código
  private correctValue(
    product: Product,
    criteria: string,
    reg: RegExp
  ) {
    const value = product[criteria];
    const correctedValue =
      typeof value === 'string' ? +value.replace(reg, '') : value;

    return correctedValue;
  }
}
