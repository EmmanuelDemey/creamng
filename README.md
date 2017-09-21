## Getting started

Install via [npm](http://npmjs.com) :

```bash
npm install creamng
```

Then include the CreamNG module in your app root module (just once, do NOT re-import it in your sub modules).

```typescript
import { CreamNgModule } from 'creamng';

@NgModule({
  imports: [
    BrowserModule,
    CreamNgModule,
    ...
  ]
  ...
})
export class AppModule {}
```


## Changelog

[Changelog available here](https://github.com/CreamNG/creamng/blob/master/CHANGELOG.md).

## License

MIT
