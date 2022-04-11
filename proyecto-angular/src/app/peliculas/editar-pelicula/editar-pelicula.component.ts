import { Component, OnInit } from '@angular/core';
import { PeliculaCreacionDTO , PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO = {titulo: '' , trailer:'' , enCines:false  , resumen:'' , fechaLanzamiento:  new Date() , poster: 'https://www.researchgate.net/profile/Maria-Monreal/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png' }

  ngOnInit(): void {
  }


  guardarCambios(pelicula: PeliculaCreacionDTO){

    console.log(pelicula)


  }

}
