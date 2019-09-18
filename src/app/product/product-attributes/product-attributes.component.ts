import {Component, OnInit} from '@angular/core';
import {NgxBreadcrumbService} from 'ngx-breadcrumb';

@Component({
  templateUrl: './product-attributes.component.html'
})
export class ProductAttributesComponent implements OnInit {

  constructor(private _breadcrumb: NgxBreadcrumbService) {
    _breadcrumb.store('id', 'Mi-8-Lite');
  }

  ngOnInit() {
  }

}
