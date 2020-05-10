import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  public option = 0;
  public selected: boolean;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (Number(params.option) >= 0) {
        this.option = Number(params.option);
        if (this.option === 1) {
          this.selected = true;
        }
      }
    });
  }

  ngOnInit(): void {
  }

  handleChange(e) {
    this.option = e.index;
  }

}
