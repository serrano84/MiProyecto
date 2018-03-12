import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { SegundoModule } from './segundo/segundo.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	SegundoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
