import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiPrimerComponeteComponent } from './mi-primer-componete/mi-primer-componete.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponeteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
