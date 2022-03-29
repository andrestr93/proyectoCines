import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'esto es con la interpolacion ';



   prueba(){

    console.log("esto es una prueba con una funcion , mostrando un console log")
  };

  pruebaPelicula(){

     let pelicula = {

      nombre: "Avatar",
      fecha_lanzamiento : new Date()


    };


    return pelicula;
 
  }
  
}

