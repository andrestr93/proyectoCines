import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { toBase64 } from '../helpers';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css'],
})
export class InputImgComponent implements OnInit {
  constructor() {}

  imagenBase64: string;

  @Input()
  urlImagenActual : string;

  @Output()
  archivoseleccionado: EventEmitter <File> = new EventEmitter <File>();


  ngOnInit(): void {

    console.log(this.urlImagenActual)
  }


  change(event) {
    if (event.target.files.length > 0) {
      // todo: ESTAMOS OBTENIENDO EL ARCHIVO SELECCIONADO
      const file: File = event.target.files[0];
      toBase64(file)
        .then((value: string) => (this.imagenBase64 = value))
        .catch((error) => console.log(error));
        this.archivoseleccionado.emit(file)
        this.urlImagenActual = null
    }
  }
}
