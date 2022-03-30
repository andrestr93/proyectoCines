import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-general',
  templateUrl: './listado-general.component.html',
  styleUrls: ['./listado-general.component.css']
})
export class ListadoGeneralComponent implements OnInit {


  /* 
  TODO: DECLARAMOS NUESTRO LISTADO CON NUESTRO INPUT PARA PASARLE EL PARAMETRO  */

  @Input()
  listado;
  constructor() { }
 

  ngOnInit(): void {
  }

}
