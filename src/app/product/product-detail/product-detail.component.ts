import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from 'ng8-breadcrumb';

@Component({
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  constructor(private _breadcrumb: BreadcrumbService) {
    _breadcrumb.store('id', 'iPhone X');
  }

  ngOnInit() {
  }

}
