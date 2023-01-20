import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/network-calls/cart.service';
import { ProductsApiService } from 'src/app/services/network-calls/products-api.service';
import { Product } from '../products-listing/products-listing.component';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  productDetails: any;

  addToCart(productDetails: Product) {
    this.cartService.addToCart(this.productDetails);
    window.alert('You product has been added to cart');
    
  }

  constructor(
    private productApiService: ProductsApiService,
    private cartService: CartService,
    public route: ActivatedRoute
  ) {}

ngOnInit() {
  this.route.params.subscribe((param: any) => {
    this.getProductsDetails(param.id)
  })

}


  private getProductsDetails(id: Number) {
    this.productApiService.getProductsDetails(id).subscribe((res: any) => {
      this.productDetails = res;
      console.log(res);
    })
  }

}
