# ng8-breadcrumb

[![NPM](https://nodei.co/npm/ng8-breadcrumb.png)](https://npmjs.org/package/ng8-breadcrumb)
<br>
<a href="https://www.npmjs.com/package/ng8-breadcrumb"><img src="https://img.shields.io/npm/dt/ng8-breadcrumb.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/ng8-breadcrumb"><img src="https://img.shields.io/npm/v/ng8-breadcrumb.svg" alt="Version"></a>

## Installation

ng8-breadcrumb is available on NPM with name ```ng8-breadcrumb```

```bash
$ npm install ng8-breadcrumb --save
```

## Setup & Usage

Once the module has been installed, you need to include `NgxBreadcrumbModule` into your root module:

```ts
import {NgxBreadcrumbModule} from 'ng8-breadcrumb';
...
@NgModule({
  imports: [
    ...
    NgxBreadcrumbModule.forRoot({
        prefix: 'Home' // default 'false'
    }),
    ...
  ],
  ...
})
export class AppModule {}
```
&
```
<ng8-breadcrumb></ng8-breadcrumb>
```

And finally use the service :
```
 constructor(private _breadcrumb: NgxBreadcrumbService) {
    _breadcrumb.store('id', 'iPhone x');
  }
```

## License

ng8-breadcrumb is released under MIT license.

## Author

[Allahyar](mailto:imAllahyar@gmail.com)
