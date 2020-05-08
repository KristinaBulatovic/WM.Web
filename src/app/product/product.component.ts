import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  public option = 0;
  constructor() { }

  ngOnInit(): void {
  }

  handleChange(e) {
    this.option = e.index;
  }

}
