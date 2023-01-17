import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/services/network-calls/products-api.service';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {
  products = [];

  constructor(
    private productApiService: ProductsApiService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }
  private getProduct() {
    this.productApiService.getProducts().subscribe((res: any) => {
      this.products = res.products;
      console.log(res.products)
    })
  }

}
