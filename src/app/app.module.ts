import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TopazDemoModule} from './topaz-demo/topaz-demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TopazDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
