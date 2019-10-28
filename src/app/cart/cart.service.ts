import { Injectable } from '@angular/core';
import { Product } from '../products/products.model';
import { BehaviorSubject } from 'rxjs';
import { Cart } from './cart.model';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart>(null);
  cartPrice = new BehaviorSubject<number>(0);
  cartItems = [];

  constructor() {}

  onAddingProduct(product: Product) {
    let doesProductExists = false;
    this.cart.getValue().items.map(p => {
      doesProductExists = p.product.id === product.id ? true : false;
    });
    console.log(doesProductExists);

    if (!doesProductExists) {
      const newItem = this.updateItem(product);
      const currentCart = this.cart.getValue();
      const updatedCart = this.updateCart(currentCart, newItem);

      this.cart.next(updatedCart);
      this.onSavingCartToLocalStorage(updatedCart);
    }
    return;
  }

  private updateCart(currentCart: Cart, newItem: CartItem) {
    if (!currentCart) {
      return { items: [newItem] };
    } else {
      return { items: [...currentCart.items, newItem] };
    }
  }

  private updateItem(product: Product) {
    const newItem = { product, quantity: 1 };
    const reg = new RegExp(/[^0-9]/g); // convierto la cadena del precio a número
    const correctItemPrice = +product.price.replace(reg, '');
    newItem.product.price = correctItemPrice.toString();
    // convierto a string para reulitizar el modelo del producto

    return newItem;
  }

  onUpdatingItemQuantity(productId: string, operation: string) {
    const updatedCart = this.cart.getValue();
    updatedCart.items.map(item => {
      if (item.product.id === productId) {
        if (operation === 'add') {
          item.quantity++;
        }
        if (operation === 'minus') {
          item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
        }
      }
    });
    this.getCartTotal();
    this.onSavingCartToLocalStorage(updatedCart);
  }

  onDeletingProduct(productId: string) {
    const currentCart = this.cart.getValue();
    const updatedCart = currentCart.items.filter(i => {
      return i.product.id !== productId;
    });
    this.cart.next({ items: updatedCart });
    this.onSavingCartToLocalStorage({ items: updatedCart });
  }

  emptyCart() {
    this.cart.next({ items: [] });
    this.onSavingCartToLocalStorage({ items: [] });
  }

  getCartTotal() {
    const currentCart = this.cart.getValue();
    let cartPrice = 0;

    currentCart.items.map(i => {
      cartPrice += +i.product.price * i.quantity;
    });

    this.cartPrice.next(cartPrice);
  }

  checout() {
    // TODO acciones para realizar la compra
    this.emptyCart();
  }

  onSavingCartToLocalStorage(cart: Cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  onRetrievingCartFromLocalStorage() {
    const cartString = localStorage.getItem('cart');
    let cart = JSON.parse(cartString);
    if (!cart) {
      cart = {
        items: [],
        cartTotal: 0,
      };
    }
    this.cart.next(cart);
    this.getCartTotal();
  }
}
