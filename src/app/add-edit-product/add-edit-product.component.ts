import { CategoryMapping, Category } from './../models/category';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.less']
})
export class AddEditProductComponent implements OnInit {
  product: Product = new Product();
  productId: number;

  result: string;
  headerMessage: string;
  message: string;
  showOption: number;

  public categoryMapping = CategoryMapping;
  public categories = Object.values(Category).filter(value => typeof value === 'number');

  constructor(private productService: ProductService, private location: Location, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.showOption = Number(params.option);
      this.productId = Number(params.id);
    });
  }

  ngOnInit(): void {
    this.headerMessage = this.showOption === 0 ? 'Add products to DB' : 'Add products to JSON';
    if (this.productId > 0) {
      this.productService.getProductForId(this.productId).subscribe(
        result => {
          if (result) {
            this.product.id = result.id;
            this.product.name = result.name;
            this.product.description = result.description;
            this.product.category = result.category;
            this.product.manufacturer = result.manufacturer;
            this.product.supplier = result.supplier;
            this.product.price = result.price;
          }
        },
        error => console.error(error));
    }
  }

  addProduct(product: Product) {
    product.category = Number(product.category);
    this.productService.addProduct(product, this.showOption).subscribe(
      data => {
        this.result = data;
        if (this.result === 'Ok') {
          this.message = 'Success!!!';
        }
      },
      error => console.error(error));
  }

  editProduct(product: Product) {
    product.category = Number(product.category);
    this.productService.editProduct(product).subscribe(
      data => {
        this.message = 'Success!!!';
      },
      error => console.error(error));
  }

  back() {
    this.location.back();
  }

}
