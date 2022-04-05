import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css'],
})
export class FiltroPeliculasComponent implements OnInit {
  // TODO: PASAMOS AL CONTRUCTOR EL OBJETO FORMBUILDER
  constructor(private formBuilder: FormBuilder , private location :Location) {}

  form: FormGroup;

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Comedia' },
    { id: 3, nombre: 'Terror' },
  ];

  peliculas = [
    {
      titulo: 'Spider-Man',
      year: new Date(),
      genero: [1, 2],
      proximosEstrenos: true,
      enCines: false,
      poster:
        'https://static.posters.cz/image/750/posters/spider-man-miles-morales-cybernetic-swing-i100282.jpg',
    },

    {
      titulo: 'men in black',
      year: new Date(),
      genero: [2],
      enCines: true,
      proximosEstrenos: false,
      poster: 'https://m.media-amazon.com/images/I/71f-ox9ZYiL._SL1500_.jpg',
    },
    {
      titulo: 'posesion',
      year: new Date(),
      genero: [3],
      enCines: true,
      proximosEstrenos: false,
      poster:
        'https://es.web.img2.acsta.net/medias/nmedia/18/94/24/26/20487363.jpg',
    },
  ];

  peliculasOriginal = this.peliculas;
  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  ngOnInit(): void {
    // TODO: EN EL ONINIT IGUALAMOS EL FORMBUILDER Y METEMOS LOS CAMPOS
    this.form = this.formBuilder.group(this.formularioOriginal);

    // TODO: CON EL THIS FORM LO QUE HACEMOS ES LANZAR EVENTOS CADA VEZ QUE EL USUARIO COMPLETE EL FORMULARIO DE BUSQUEDA
    this.form.valueChanges.subscribe((valores) => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      this.parametrosBusquedaEnURL();
      
    });
  }

  // TODO: EL SIGUIENTE METODO FILTRA LAS PELICULAS SEGÚN LO QUE RELLENEMOS EN EL FORMULARIO PASANDO COMO PARAMETRO LOS VALORES MARCADOS
  // TODO: POR EL USUARIO
  buscarPeliculas(valores: any) {
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.titulo.indexOf(valores.titulo) !== -1
      );
    }
    if (valores.generoId !== 0) {
      this.peliculas = this.peliculas.filter((pelicula) =>
        pelicula.genero.indexOf(valores.generoId)
      );
    }

    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.proximosEstrenos
      );
    }

    if (valores.enCines) {
      this.peliculas = this.peliculas.filter((pelicula) => pelicula.enCines);
    }

  }

  clean() {
    this.form.patchValue(this.formularioOriginal);
  }

  private parametrosBusquedaEnURL() {
    var queryStrings = [];

    var valoresFormulario = this.form.value;

    if (valoresFormulario.titulo) {
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }
    if (valoresFormulario.generoId != '0') {
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }


    if(valoresFormulario.proximosEstrenos){

      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`)
    }
    if(valoresFormulario.enCines){

      queryStrings.push(`proximosEstrenos=${valoresFormulario.enCines}`)
    }

    this.location.replaceState('peliculas/buscar' , queryStrings.join('&'))


  }
}
