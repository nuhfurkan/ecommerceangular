import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../interfaces/cart';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({items: []});

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 1500 });
  }

  getTotal(items: Array<CartItem>) {
    return items.map((item) => item.price * item.quantity).reduce((acc, value) => acc + value, 0);
  }

  emptyCart() {
    this.cart.next({
      items: []
    });
    this._snackBar.open("Cart is cleared", "Ok", {duration: 1500});
  }

  decreaseQunatity(element: CartItem) {
    element.quantity -= 1;
    this.cart.next({items: this.cart.value.items});
  }

  increaseQunatity(element: CartItem) {
    element.quantity += 1;
    this.cart.next({items: this.cart.value.items});
  }

  getTotalQuantity(): number {
    return this.cart.value
    .items
    .map((item) => item.quantity)
    .reduce((prev, curent) => prev + curent, 0);
  }

  removeItem(element: CartItem) {
    this.cart.next({
      items: this.cart.value.items.filter(item => item.id !== element.id)
    });
    this._snackBar.open("Product removed from your cart", "Ok", {duration: 1500});
  }
}



