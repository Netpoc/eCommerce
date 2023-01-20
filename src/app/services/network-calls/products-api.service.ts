import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  
  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get('https://dummyjson.com/products');
  }

  getProductsDetails(id: Number): Observable<any> {
    console.log(id);
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
