import { ProductService } from './product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { TabViewModule } from 'primeng/tabview';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TabViewModule,
    RouterModule.forRoot([
      { path: '', component: ProductComponent }
    ]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
