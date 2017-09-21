import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreamNgModule } from 'creamng';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, CreamNgModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
