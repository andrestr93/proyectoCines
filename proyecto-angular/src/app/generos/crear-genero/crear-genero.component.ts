import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css'],
})
export class CrearGeneroComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveGenero() {
    // TODO: METODO QUE UTILIZAMOS PARA REDIRIGIR A OTRA PESTAÑA , IMPORTANDO EL PAQUETE ANGULAR(ROUTER)
    // TODO: Y LUEGO CON EL METODO NAVIGATE 
    this.router.navigate(['generos']);
  }
}
