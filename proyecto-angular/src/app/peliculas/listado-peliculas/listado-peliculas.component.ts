import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css'],
})
export class ListadoPeliculasComponent implements OnInit {
  constructor() {}

  /*
  TODO: EN LISTADO-PELICULAS.COMPONENT TENEMOS LA DECLARACIÓN DE PELICULAS 

  
  */
  @Input()
  peliculas;

  ngOnInit(): void {
    setTimeout(() => {}, 5000);
  }

  removeItem(indicePelicula: number): void {
    this.peliculas.splice(indicePelicula, 1);
  }
}
