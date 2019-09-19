import {ModuleWithProviders, NgModule} from '@angular/core';
import {Ng8BreadcrumbComponent} from './ng8-breadcrumb.component';
import {BreadcrumbService} from './ng8-breadcrumb.service';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [Ng8BreadcrumbComponent],
  imports: [RouterModule, CommonModule],
  exports: [Ng8BreadcrumbComponent]
})
export class Ng8BreadcrumbModule {

  static forRoot(config: ModuleConfig = DEFAULT_CONFIG): ModuleWithProviders {
    return {
      ngModule: Ng8BreadcrumbModule,
      providers: [
        {provide: 'config', useValue: config},
        BreadcrumbService
      ]
    };
  }

}

export interface ModuleConfig {
  prefix: string | boolean;
}

export const DEFAULT_CONFIG: ModuleConfig = {
  prefix: false
};

