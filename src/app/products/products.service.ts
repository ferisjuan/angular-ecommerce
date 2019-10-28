import { Injectable } from '@angular/core';

import data from '../data/products';
import { Product } from './products.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private selectedProducts: Product[];
  productList = new BehaviorSubject<Product[]>([]);
  filterOptions = new BehaviorSubject<object>({});

  constructor() {}

  retrieveData(sublevelId: number) {
    return data.filter(product => {
      return product.sublevel_id === sublevelId;
    });
  }

  public getProducts(sublevelId: number) {
    this.selectedProducts = this.retrieveData(sublevelId);
    this.productList.next(this.selectedProducts);
  }

  public setFilterOptions(filterOptions: {}) {
    this.filterOptions.next(filterOptions);
  }

  public sortProducts(orderCrit: string, orderParam: string) {
    const productList = [...this.selectedProducts];
    sortingFunction(productList, orderCrit, orderParam);
    this.productList.next(productList);
  }
}

function sortingFunction(
  productList: Product[],
  orderCrit: string,
  orderParam: string
) {
  const sortedList = productList.sort((a: any, b: any) => {
    let validation: boolean;

    validation = a[orderParam] > b[orderParam];

    // dado que el formato de los números se entrega en forma de string
    // creé una derivación para convertirlo en números
    if (orderParam === 'price') {
      let c;
      let d;
      const reg = new RegExp(/[^0-9]/g);
      c = +a[orderParam].replace(reg, '');
      d = +b[orderParam].replace(reg, '');
      validation = c > d;
    }
    if (validation) {
      return -1;
    }
    if (validation) {
      return 1;
    }
    return 0;
  });
  if (orderCrit === 'descending') {
    return sortedList;
  }
  return sortedList.reverse();
}
