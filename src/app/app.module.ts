import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-core/common/header/header.component';
import { FooterComponent } from './app-core/common/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProductsListingComponent } from './components/marketplace/products-listing/products-listing.component';
import { ProductDetailComponent } from './components/marketplace/product-detail/product-detail.component';

import { CheckoutComponent } from './components/marketplace/checkout/checkout.component';
import { ForgottenPasswordComponent } from './components/auth/forgotten-password/forgotten-password.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/marketplace/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ProductsListingComponent,
    ProductDetailComponent,    
    CheckoutComponent,
    ForgottenPasswordComponent,
    CartComponent
     
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ProductsListingComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'cart', component: CartComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
