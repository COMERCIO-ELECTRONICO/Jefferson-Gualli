import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiPrimerComponeteComponent } from './mi-primer-componete/mi-primer-componete.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponeteComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // modulo de formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
