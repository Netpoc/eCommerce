import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/network-calls/cart.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    items = this.cartService.getItems();
    constructor(
        public cartService: CartService
    ){}
    ngOnInit(): void {
        
    }
}
