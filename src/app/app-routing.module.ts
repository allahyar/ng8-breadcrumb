import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'prefix',
    children: [
      {
        path: 'product',
        data: {breadcrumb: 'Product'},
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: '404',
        data: {breadcrumb: '404'},
        component: NotFoundComponent
      },
    ]
  },
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
