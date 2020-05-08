import { CategoryMapping, Category } from './../models/category';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.less']
})
export class AddEditProductComponent implements OnInit {
  product: Product = new Product();

  result: string;
  message: string;

  public categoryMapping = CategoryMapping;
  public categories = Object.values(Category).filter(value => typeof value === 'number');

  constructor(private productService: ProductService, private location: Location) { }

  ngOnInit(): void {
  }

  addProduct(product: Product) {
    product.category = Number(product.category);
    this.productService.addProduct(product).subscribe(
      data => {
        this.result = data;
        if (this.result === 'Ok') {
          this.message = 'Success!!!';
        }
      },
      error => console.error(error));

  }

  back() {
    this.location.back();
  }

}
