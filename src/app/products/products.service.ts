import { Injectable } from '@angular/core';

import data from '../data/products';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private selectedProducts: Product[];

  constructor() {}

  retrieveData(sublevelId: number) {
    return data.filter(product => {
      return product.sublevel_id === sublevelId;
    });
  }

  public getProducts(sublevelId: number) {
    this.selectedProducts = this.retrieveData(sublevelId);
    return this.selectedProducts;
  }
}
