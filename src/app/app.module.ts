import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {Ng8BreadcrumbModule} from 'ng8-breadcrumb';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng8BreadcrumbModule.forRoot({
      prefix: 'Home'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
