import { CategoryMapping, Category } from './../models/category';
import { ProductService } from './../product.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  @Input()
  set option(option: number) {
    if (option === 0) {
      this.productService.getProductsFromDB().subscribe(
        result => {
          this.products = result;
        },
        error => console.error(error));
    } else if (option === 1) {
      this.productService.getProductsFromJSON().subscribe(
        result => {
          this.products = result;
        },
        error => console.error(error));
    }
  }

  public categoryMapping = CategoryMapping;
  public categories = Object.values(Category);

  product: Product = new Product();
  products: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
