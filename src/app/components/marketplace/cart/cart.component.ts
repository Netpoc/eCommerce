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

    //Calculate Total
    public calculateTotal() {
        return this.items.reduce((acc, prod) => acc+= prod.price*prod.qty,0)
    }

    //Remove Item From Cart
    removeItem(item:any) {
        this.items= this.items.filter(({id}) => id !== item.id)
        this.itemRemoved.emit(item);
    }

    constructor(
        public cartService: CartService
    ){}
    
}
