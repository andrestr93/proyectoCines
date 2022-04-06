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
    foto: 'https://m.media-amazon.com/images/I/51e6kpkyuIL._AC_SY355_.jpg'
  };
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {

    });
  }

  guardarCambios(actor: actorCreacionDTO) {
    console.log(actor);
  }
}
