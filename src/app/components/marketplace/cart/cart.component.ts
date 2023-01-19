import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/network-calls/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  items:any = [];
  
  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
      this.items = this.cartService.getItems();
  }

  removeFromCart(item) {
    this.cartService.removeFromCart(item);
    this.items = this.items.filter(i => i !== item);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    this.items = this.cartService.getItems();
  }

}