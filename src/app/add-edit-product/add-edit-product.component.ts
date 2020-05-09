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
  showButton: boolean;

  public categoryMapping = CategoryMapping;
  public categories = Object.values(Category).filter(value => typeof value === 'number');

  constructor(private productService: ProductService, private location: Location, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.showOption = Number(params.option);
      this.productId = Number(params.id);
    });
  }

  ngOnInit(): void {
    if (this.productId !== 0) {
      this.headerMessage = this.showOption === 0 ? 'Edit products to DB' : 'Edit products to JSON';
      this.showButton = false;

      this.productService.getProductForId(this.productId, this.showOption).subscribe(
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
    } else {
      this.headerMessage = this.showOption === 0 ? 'Add products to DB' : 'Add products to JSON';
      this.showButton = true;
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
    this.productService.editProduct(product, this.showOption).subscribe(
      data => {
        this.message = 'Success!!!';
      },
      error => console.error(error));
  }

  back() {
    this.location.back();
  }

}
