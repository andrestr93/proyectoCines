import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css'],
})
export class FormularioPeliculaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Input()
  modelo: PeliculaDTO;

  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  generosNoSeleccionados: MultipleSelectorModel[] = [
    { llave: 1, valor: 'Comedia' },
    { llave: 2, valor: 'Ciencia Ficción' },
    { llave: 3, valor: 'Terror' },
    { llave: 4, valor: 'Accion' },
  ];

  generosSeleccionados: MultipleSelectorModel[] = [];

  cinesNoSeleccionados: MultipleSelectorModel[] = [
    { llave: 1, valor: 'Kinepolis Granada' },
    { llave: 2, valor: 'KInepolis Nevada' },
    { llave: 3, valor: 'Kinepolis Valencia' },
  ];

  cinesSeleccionados: MultipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      cinesId: '',
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios() {
    console.log(this.generosNoSeleccionados);
    const generosIds = this.generosSeleccionados.map((val) => val.llave);
    this.form.get('generosId').setValue(generosIds);

    const cinesIds = this.cinesNoSeleccionados.map((val) => val.llave);
    this.form.get('cinesIds').setValue(cinesIds);

    this.OnSubmit.emit(this.form.value);
  }

  archivoSeleccionado(archivo: File) {
    this.form.get('poster').setValue(archivo);
  }

  changueMarkDown(texto) {
    this.form.get('resumen').setValue(texto);
  }
}
