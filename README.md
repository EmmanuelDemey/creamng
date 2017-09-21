## Getting started

Install via [npm](http://npmjs.com) :

```bash
npm install creamng
```

Then include the CreamNG module in your app root module (just once, do NOT re-import it in your sub modules).

```typescript
import { CreamNgModule } from 'cream-ng';

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

Now you just have to inject the service where you need it :

```typescript
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class YourService {

  public constructor(protected storage: AsyncLocalStorage) {}

  public ngOnInit() {

    this.storage.setItem('lang', 'fr').subscribe(() => {
      // Done
    });

  }

}
```



## Changelog

[Changelog available here](https://github.com/CreamNG/creamng/blob/master/CHANGELOG.md).

## License

MIT
