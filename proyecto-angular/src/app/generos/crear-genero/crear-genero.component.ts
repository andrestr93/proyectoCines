import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css'],
})
export class CrearGeneroComponent  {
  constructor(private router: Router) {}


  guardarCambios(genero:generoCreacionDTO) {
    // TODO: METODO QUE UTILIZAMOS PARA REDIRIGIR A OTRA PESTAÑA , IMPORTANDO EL PAQUETE ANGULAR(ROUTER)
    // TODO: Y LUEGO CON EL METODO NAVIGATE NAVEGAMOS ENTRE RUTAS
   
    this.router.navigate(['/generos']);

  }
  
}
