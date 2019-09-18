import {Component, OnInit} from '@angular/core';
import {NgxBreadcrumbService} from 'ngx-breadcrumb';

@Component({
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  constructor(private _breadcrumb: NgxBreadcrumbService) {
    _breadcrumb.store('id', 'Mi-8-Lite');
  }

  ngOnInit() {
  }

}
