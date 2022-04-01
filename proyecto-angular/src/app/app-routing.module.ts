import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';

// TODO: REGLAS DE LA RUTA , PARA NAVEGAR DE UNA PAGINA A OTRA
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  //TODO: GRUPO GENEROS
  { path: 'generos', component: IndiceGenerosComponent },
  { path: 'generos/crear', component: CrearGeneroComponent },

  //TODO GRUPO DE CINE
  { path: 'cines', component: IndiceCinesComponent },
  {path: 'cines/crear' , component :CrearCineComponent},

  //TODO GRUPO DE ACTORES
  { path: 'actores', component: IndiceActoresComponent },
  {path: 'actores/crear' , component :CrearActorComponent},

  //TODO GRUPO PELICULA
  {path: 'crear-pelicula' , component :CrearPeliculaComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
