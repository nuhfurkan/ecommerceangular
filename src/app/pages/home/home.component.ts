import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: {[id: number]: number} = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cols:number = 3
  rowHeight: number = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  products: Product[] = [];

  constructor(private cartService: CartService, private storageService: StoreService) {
    this.storageService.fetchItems(12).forEach(item => item.forEach(e => this.products.push(e)));
  }
  
  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  showCategory(newCategory: string):void {
    this.category = newCategory;
  } 

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }



}
