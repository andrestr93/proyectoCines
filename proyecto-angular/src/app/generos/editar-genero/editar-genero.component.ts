import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor( private router : Router) { }

  modelo:generoCreacionDTO = {nombre: 'Drama'}

  ngOnInit(): void {
  }


  guardarCambios(genero:generoCreacionDTO) {
    // TODO: METODO QUE UTILIZAMOS PARA REDIRIGIR A OTRA PESTAÑA , IMPORTANDO EL PAQUETE ANGULAR(ROUTER)
    // TODO: Y LUEGO CON EL METODO NAVIGATE NAVEGAMOS ENTRE RUTAS
    
    this.router.navigate(['/generos']);

  }
  

}
