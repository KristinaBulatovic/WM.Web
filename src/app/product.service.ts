import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = 'http://localhost:12345/api/';
  constructor(private http: HttpClient) { }

  getProductsFromDB() {
    return this.http.get<Product[]>(this.api + 'Product/GetProductsFromDB');
  }

  getProductsFromJSON() {
    return this.http.get<Product[]>(this.api + 'Product/GetProductsFromJSON');
  }

  addProduct(product: Product) {
    return this.http.post(this.api + 'Product/AddProduct', product, { responseType: 'text' });
  }

  getProductForId(productId: number) {
    return this.http.get<Product>(this.api + 'Product/GetProductForId?productId=' + productId);
  }

  editProduct(product: Product) {
    return this.http.post(this.api + 'Product/EditProduct', product, { responseType: 'text' });
  }

}
