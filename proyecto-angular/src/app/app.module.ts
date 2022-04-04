import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGeneralComponent } from './utilidades/listado-general/listado-general.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
// TODO: IMPORTAMOS EL PAQUETE REACTIVEFORMSMODULE
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioGeneroComponent } from './generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
 

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
    CrearCineComponent,
    CrearPeliculaComponent,
    CrearActorComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarPeliculaComponent,
    EditarCineComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent, 

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
