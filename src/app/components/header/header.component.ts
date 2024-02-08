import { Component, Input, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cart } from 'src/app/interfaces/cart';
import { CartItem } from 'src/app/interfaces/cart-item';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _cart: Cart = { items: []};
  itemsQuantity: number = 0;
  user: any;

  @Input() 
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = this.cartService.getTotalQuantity()
  }

  constructor(private cartService: CartService, private authService: AuthService, public dialog: MatDialog) {
    authService.user$.subscribe((user) => {
      this.user = user;
    })
  }

  ngOnInit(): void {    
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.emptyCart();
  }

  openSignUpDialog(): void {
    const dialogRef = this.dialog.open(SignupDialogComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  openLogInDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  logout() {
    this.authService.logout();
  }
}
