import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Compo3Component } from './compo3/compo3.component';
import { Compo4Component } from './compo4/compo4.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Compo3Component,
    Compo4Component,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
