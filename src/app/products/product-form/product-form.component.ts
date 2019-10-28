import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass'],
})
export class ProductFormComponent {
  @ViewChild('form', { static: true }) productsForm: NgForm;

  defaultPriceOption = 'Selecciona...';
  defaultStockOption = 'Selecciona...';
  defaultAvailableOption = false;
  filterOptions = [
    'Selecciona...',
    'Menor a 99',
    'De 100 a 999',
    'Mayor a 1000',
  ];

  constructor(private productsService: ProductsService) {}

  onFilterSelected() {
    this.productsService.setFilterOptions(this.productsForm.value);
  }

  onFilterClear() {
    this.productsService.setFilterOptions({
      price: null,
      quantity: null,
      available: false,
    });
    this.defaultPriceOption = 'Selecciona...';
    this.defaultStockOption = 'Selecciona...';
    this.defaultAvailableOption = false;
  }
}
