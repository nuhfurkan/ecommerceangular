import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();
  @Input()
  product!: Product;

  constructor() {
  }

  onAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }

}
