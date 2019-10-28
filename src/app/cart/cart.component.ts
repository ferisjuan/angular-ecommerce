import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from './cart.service';
import { Subscription } from 'rxjs';
import { Product } from '../products/products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartSubscription: Subscription;
  cartPriceSubscription: Subscription;

  cartItems = [];
  cartPrice = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  onCheckout() {
    this.cartService.checout();
    this.router.navigate(['']);
  }

  onDeleteCartItem(id: string) {
    this.cartService.onDeletingProduct(id);
  }

  onQuantityChange(productId: string, operation: string) {
    this.cartService.onUpdatingItemQuantity(productId, operation);
  }

  onCurrencyFormat(value: number) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'COL',
      minimumFractionDigits: 0,
    });
    const formattedNumber = formatter.format(value);
    return formattedNumber;
  }

  ngOnInit() {
    this.cartService.onRetrievingCartFromLocalStorage();
    this.cartSubscription = this.cartService.cart.subscribe(c => {
      this.cartItems = c.items;
    });
    this.cartPriceSubscription = this.cartService.cartPrice.subscribe(
      price => (this.cartPrice = price)
    );
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.cartPriceSubscription.unsubscribe();
  }
}
