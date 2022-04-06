import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css'],
})
export class EditarActorComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {}

  modelo: actorDTO = {
    nombre: 'Felipe',
    fechaNacimiento: new Date(),
    foto: 'https://www.researchgate.net/profile/Maria-Monreal/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png'
  };
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {

    });
  }

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
  }
}
