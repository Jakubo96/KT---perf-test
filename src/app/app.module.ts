import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Example1Component} from './example1/example1.component';
import {AppRoutingModule} from './app-routing.module';
import {Example1NestedComponent} from './example1/example1-nested/example1-nested.component';
import {Example2Component} from './example2/example2.component';
import {Example2NestedComponent} from './example2/example2-nested/example2-nested.component';
import {Example3Component} from './example3/example3.component';
import {Example3NestedComponent} from './example3/example3-nested/example3-nested.component';
import { Example4Component } from './example4/example4.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example1NestedComponent,
    Example2Component,
    Example2NestedComponent,
    Example3Component,
    Example3NestedComponent,
    Example4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
