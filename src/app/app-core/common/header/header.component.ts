import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/network-calls/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items = this.cartService.getItems();
 

  constructor(
    public cartService: CartService,
   
    ) { }

  ngOnInit(): void {
  }

}
