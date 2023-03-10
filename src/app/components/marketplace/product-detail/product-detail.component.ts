import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/network-calls/cart.service';
import { ProductsApiService } from 'src/app/services/network-calls/products-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() productDetails: any;
  items = this.cartService.getItems();

  //Add Item To Cart
  addToCart(product: any) {

    const itemExist = this.items.find(({ id }) => id === product.id);
    if (!itemExist) {

      this.items.push({ ...product, qty: 1 });
      return;
    }
    itemExist.qty += 1;
  }

  constructor(
    private productApiService: ProductsApiService,
    public cartService: CartService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      this.getProductsDetails(param.id)
    })

  }

  private getProductsDetails(id: Number) {
    this.productApiService.getProductsDetails(id).subscribe((res: any) => {
      this.productDetails = res;
    })
  }

}
