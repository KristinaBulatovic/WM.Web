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

  addProduct(product: Product, showOption: number) {
    const url = showOption === 0 ? 'AddProduct' : 'AddProductToJSON';
    return this.http.post<any>(this.api + 'Product/' + url, product);
  }

  getProductForId(productId: number, showOption: number) {
    const url = showOption === 0 ? 'GetProductForId' : 'GetProductForIdFromJSON';
    return this.http.get<Product>(this.api + 'Product/' + url + '?productId=' + productId);
  }

  editProduct(product: Product, showOption: number) {
    const url = showOption === 0 ? 'EditProduct' : 'EditProductFromJSON';
    return this.http.post<any>(this.api + 'Product/' + url, product);
  }

  deleteProduct(productId: number, showOption: number) {
    const url = showOption === 0 ? 'DeleteProduct' : 'DeleteProductFromJSON';
    return this.http.delete<any>(this.api + 'Product/' + url + '?productId=' + productId);
  }

}
