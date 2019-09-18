import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductAttributesComponent} from './product-attributes/product-attributes.component';

const routes: Routes = [
  {path: ':id', redirectTo: ':id/detail', pathMatch: 'full'},
  {path: ':id/detail', component: ProductDetailComponent, data: {breadcrumb: 'Detail'}},
  {path: ':id/attributes', component: ProductAttributesComponent, data: {breadcrumb: 'Attributes'}},
];

@NgModule({
  declarations: [ProductDetailComponent, ProductAttributesComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProductModule {
}
