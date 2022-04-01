import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    setTimeout(() => {
      /*
      TODO: AQUI TENEMOS LOS DOS ARRAYS ESTRENOS Y PROXIMAMEWNTE EN LA CLASE APP COMPONENT DE LANDING PAGE
      */

      this.estrenos = [
        {
          titulo: 'Spider-Man',
          year: new Date(),
          genero: 'Accion',
          poster: 'https://static.posters.cz/image/750/posters/spider-man-miles-morales-cybernetic-swing-i100282.jpg'
        },

        {
          titulo: 'men in black',
          year: new Date(),
          genero: 'Accion',
          poster: 'https://m.media-amazon.com/images/I/71f-ox9ZYiL._SL1500_.jpg'
        },
        {
          titulo: 'posesion',
          year: new Date(),
          genero: 'Terror',
          poster: 'https://es.web.img2.acsta.net/medias/nmedia/18/94/24/26/20487363.jpg'
        },
      ];

      this.proximamente = [
        {
          titulo: 'Spider-Man 3',
          year: new Date(),
          genero: 'Accion',
          poster: 'https://www.mubis.es/media/covers/3154/20983/spider-man-3-reedicion-original.jpg'
        },

        {
          titulo: 'Scream 4',
          year: new Date(),
          genero: 'Terror', 
          poster: 'data:image/jpeg;base64,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'
        },
        {
          titulo: 'Avatar 2',
          year: new Date(),
          genero: 'Ciencia Ficción',
          poster: 'https://eloutput.com/app/uploads-eloutput.com/2021/12/avatar-2-cartel.jpg'
        },
      ];

      this.actores = [
        {
          nombre: 'Mel-Gibson',
          year: new Date(),
          age: '55',
          poster: ''
        },

        {
          nombre: 'Amaia Salamanca',
          year: new Date(),
          age: '30',
          poster: ''
        },

        {
          nombre: 'Maria Pedraza',
          year: new Date(),
          age: '25',
          poster: ''
        },
      ];
    }, 100);
  }

  estrenos;
  proximamente;
  actores;



}
