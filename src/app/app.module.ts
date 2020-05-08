import { ProductService } from './product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    AddEditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TabViewModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductComponent },
      { path: 'add-edit-product', component: AddEditProductComponent },
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: '**', redirectTo: 'product', pathMatch: 'full' }
    ]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
