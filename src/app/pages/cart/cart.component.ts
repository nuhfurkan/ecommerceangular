import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Cart } from 'src/app/interfaces/cart';
import { CartItem } from 'src/app/interfaces/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = {items: [
    {
      product: "daad",
      name: "scnickers",
      price: 150,
      quantity: 123,
      id: 1,
    },
    {
      product: "d",
      name: "padfj",
      price: 200,
      quantity: 13,
      id: 2,
    }
  ]};

  dataSource: Array<CartItem> = [];
  displayColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action"
  ]; 

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
      this.dataSource = this.cart.items;
      this.cartService.cart.subscribe((_cart)=>{
        this.cart = _cart;
        this.dataSource = this.cart.items;
      });
  }

  getTotal(items: Array<CartItem>) {
    return this.cartService.getTotal(items);
  }

  increaseQunatity(element: CartItem) {
    this.cartService.increaseQunatity(element);
  }

  decreaseQunatity(element: CartItem) {
    this.cartService.decreaseQunatity(element);
  }

  clearAll() {
    this.cartService.emptyCart();
  }

  removeCartItem(element: CartItem) {
    this.cartService.removeItem(element);
  }
}
