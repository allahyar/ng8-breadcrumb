import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NgxBreadcrumbModule} from 'ngx-breadcrumb';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBreadcrumbModule.forRoot({
      prefix: 'Home'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
