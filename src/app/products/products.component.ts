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
  selectedSublevelId: Subscription;
  currentItemsId: number;
  productList: Product[];

  constructor(
    private menuService: MenuService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.selectedSublevelId = this.menuService.selectedItemsId.subscribe(
      sublevelId => {
        this.currentItemsId = sublevelId;
        this.productList = this.productsService.getProducts(
          sublevelId
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.selectedSublevelId.unsubscribe();
  }
}
