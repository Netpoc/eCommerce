import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CartService } from "src/app/services/network-calls/cart.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {

    @Input() items = this.cartService.getItems();
    @Output() itemRemoved = new EventEmitter();
    modelChanged(items:any) {
        if(items.qty === 0) {
            this.itemRemoved.emit(this.items);
        }
    }
    constructor(
        public cartService: CartService
    ){}
    
}
