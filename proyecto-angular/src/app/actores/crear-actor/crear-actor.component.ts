import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { actorCreacionDTO , actorDTO } from '../actor';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  constructor(private router : Router) { }

  modelo: actorDTO = {
    nombre: '',
    fechaNacimiento: new Date(),
    foto: 'https://www.researchgate.net/profile/Maria-Monreal/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png'
  };
  ngOnInit(): void {

    console.log(this.modelo)
  }

  saveActores(){

    this.router.navigate(["/actores"])
  }

  guardarCambios(actor:actorCreacionDTO){

    console.log(actor)
  }



}
