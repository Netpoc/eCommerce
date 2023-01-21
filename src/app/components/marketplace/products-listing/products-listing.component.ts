import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/services/network-calls/products-api.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {
  allProducts = [];


  constructor(
    private route: ActivatedRoute,

    private productApiService: ProductsApiService
  ) { }

  ngOnInit(): void {
    this.getProduct();

  }
  public getProduct() {
    this.productApiService.getProducts().subscribe((res: any) => {
      this.allProducts = res.products;
      console.log(res.products)
    })
  }


}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  qty: number;
}
