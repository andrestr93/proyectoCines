import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGeneralComponent } from './utilidades/listado-general/listado-general.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { materialize } from 'rxjs';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGeneralComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceActoresComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    IndiceCinesComponent,
    CrearCineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
