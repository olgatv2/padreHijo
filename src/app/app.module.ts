import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTrabajadorComponent } from './card-trabajador/card-trabajador.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTrabajadorComponent,
    TrabajadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
