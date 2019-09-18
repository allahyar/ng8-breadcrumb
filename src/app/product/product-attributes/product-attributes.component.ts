import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from 'ng8-breadcrumb';

@Component({
  templateUrl: './product-attributes.component.html'
})
export class ProductAttributesComponent implements OnInit {

  constructor(private _breadcrumb: BreadcrumbService) {
    _breadcrumb.store('id', 'Mi-8-Lite');
  }

  ngOnInit() {
  }

}
