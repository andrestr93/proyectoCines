import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-actores',
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.css']
})
export class ListadoActoresComponent implements OnInit {

  constructor() { }

  @Input()
  actores;

  

  ngOnInit(): void {
  }


  removeItem(indiceActor: number): void {
    this.actores.splice(indiceActor, 1);
  }

}
