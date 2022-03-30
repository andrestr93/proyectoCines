import { ThisReceiver } from '@angular/compiler';
import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {


      /*
      TODO: AQUI TENEMOS LOS DOS ARRAYS ESTRENOS Y PROXIMAMEWNTE EN LA CLASE APP COMPONENT 
      */

  this.estrenos = [
    {
      titulo: 'Spider-Man',
      year: new Date(),
      genero: 'Accion',
    },

    {
      titulo: 'man in black',
      year: new Date(),
      genero: 'Accion',
    },
    {
      titulo: 'posesion',
      year: new Date(),
      genero: 'Terror',
    },
  ];


  this.proximamente = [
    {
      titulo: 'Spider-Man 3',
      year: new Date(),
      genero: 'Accion',
    },

    {
      titulo: 'man in black 4',
      year: new Date(),
      genero: 'Accion',
    },
    {
      titulo: 'posesion 5',
      year: new Date(),
      genero: 'Terror',
    },
  ];
  


  this.actores = [
    {
      nombre: 'Mel-Gibson',
      year: new Date(),
      age: '55',
    },

    {
      nombre: 'Amaia Salamanca',
      year: new Date(),
      age: '30',
    },

    {
      nombre: 'Maria Pedraza',
      year: new Date(),
      age: '25',
    },
  ];



    }, 100);
  }
  title = 'esto es con la interpolacion ';

  estrenos;
  proximamente;
  actores;



 

}
