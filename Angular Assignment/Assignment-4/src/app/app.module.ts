import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { TypeDirective } from './Directives/type.directive';
import { PureExpontialPipe } from './Pipes/pure-expontial.pipe';
import { ImpureJSONPipe } from './Pipes/impure-json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    TypeDirective,
    PureExpontialPipe,
    ImpureJSONPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
