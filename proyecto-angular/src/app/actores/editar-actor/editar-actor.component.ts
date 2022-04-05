import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  modelo: actorCreacionDTO = {nombre: 'Felipe' , fechaNacimiento : new Date()}
  ngOnInit(): void {

    this.activateRoute.params.subscribe(params=>{

      
      
    })
  }

  guardarCambios(actor :actorCreacionDTO){


    console.log(actor)


  }

}
