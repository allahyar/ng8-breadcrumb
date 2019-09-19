import {Component} from '@angular/core';
import {BreadcrumbService} from './ng8-breadcrumb.service';

@Component({
  selector: 'ng8-breadcrumb',
  template: `
    <ol class="breadcrumb">
      <ng-container *ngFor="let breadcrumb of _breadcrumbs.breadcrumbs$ | async; last as isLast;">
        <li *ngIf="breadcrumb.label!==''"
            class="breadcrumb-item"
            [ngClass]="{'active': isLast}">
          <a *ngIf="!isLast; else lastRoute"
             [routerLink]="[breadcrumb.url]"
             routerLinkActive="active">
            {{ breadcrumb.label }}
          </a>
          <ng-template #lastRoute>{{ breadcrumb.label }}</ng-template>
        </li>
      </ng-container>
    </ol>
  `
})
export class Ng8BreadcrumbComponent {

  constructor(public _breadcrumbs: BreadcrumbService) {
  }

}
