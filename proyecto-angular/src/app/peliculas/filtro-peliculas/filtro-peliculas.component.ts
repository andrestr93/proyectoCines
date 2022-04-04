import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css'],
})
export class FiltroPeliculasComponent implements OnInit {
  // TODO: PASAMOS AL CONTRUCTOR EL OBJETO FORMBUILDER
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  generos = [

    {id: 1 , nombre : "Drama"},
    {id: 2 , nombre : "Comedia"},
    {id: 3 , nombre : "Terror"}
  ];

  peliculas = [

    {
      titulo: 'Spider-Man',
      year: new Date(),
      genero: [1,2],
      proximosEstrenos :false,
      enCines: false,
      poster: 'https://static.posters.cz/image/750/posters/spider-man-miles-morales-cybernetic-swing-i100282.jpg'
    },

    {
      titulo: 'men in black',
      year: new Date(),
      genero: [2],
      enCines: true,
      proximosEstrenos:false,
      poster: 'https://m.media-amazon.com/images/I/71f-ox9ZYiL._SL1500_.jpg'
    },
    {
      titulo: 'posesion',
      year: new Date(),
      genero: [3],
      enCines: true,
      proximosEstrenos:false,
      poster: 'https://es.web.img2.acsta.net/medias/nmedia/18/94/24/26/20487363.jpg'
    },

   
     



  ]

  ngOnInit(): void {
    // TODO: EN EL ONINIT IGUALAMOS EL FORMBUILDER Y METEMOS LOS CAMPOS
    this.form = this.formBuilder.group({
      titulo: '',
      generoId: 0,
      proximosEstrenos:false,
      enCines:false,
    });
  }

  clean(){


  }
}
