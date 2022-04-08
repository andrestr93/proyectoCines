import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cines';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styles: [],
})
export class EditarCineComponent implements OnInit {
  constructor() {}

  modelo: cineDTO = { nombre: 'Sambil'  , latitud: 37.1460511137383 , longitud: -3.6151242256164555};
  ngOnInit(): void {}

  guardarCambios(cine: cineCreacionDTO) {
    console.log(cine);
  }
}
