import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MenuService } from '../menu/menu.service';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productList: Product[];
  priceRange: string;
  quantityRange: string;
  isFiltered: boolean;

  filteredStatus: Subscription;
  productSubscription: Subscription;
  selectedSublevelId: Subscription;

  constructor(
    private menuService: MenuService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.selectedSublevelId = this.menuService.selectedItemsId.subscribe(
      sublevelId => {
        this.productsService.getProducts(sublevelId);
        this.productSubscription = this.productsService.productList.subscribe(
          products => (this.productList = products)
        );
      }
    );
    this.filteredStatus = this.productsService.filterOptions.subscribe(
      (options: {
        price: string;
        quantity: string;
        available: boolean;
      }) => {
        this.priceRange = options.price;
        this.quantityRange = options.quantity;
        this.isFiltered = options.available;
      }
    );
  }

  ngOnDestroy(): void {
    this.selectedSublevelId.unsubscribe();
    this.productSubscription.unsubscribe();
    this.filteredStatus.unsubscribe();
  }
}
