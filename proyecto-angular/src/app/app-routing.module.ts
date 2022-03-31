import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

// TODO: REGLAS DE LA RUTA , PARA NAVEGAR DE UNA PAGINA A OTRA
const routes: Routes = [

  {path: '' , component :LandingPageComponent}



];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]


})
export class AppRoutingModule { }
