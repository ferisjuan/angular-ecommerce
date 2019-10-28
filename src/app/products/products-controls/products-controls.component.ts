import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-controls',
  templateUrl: './products-controls.component.html',
  styleUrls: ['./products-controls.component.sass'],
})
export class ProductsControlsComponent {
  constructor(private productService: ProductsService) {}

  onSortProducts(orderCrit: string, orderParam: string) {
    this.productService.sortProducts(orderCrit, orderParam);
  }
}
