import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indice-cines',
  templateUrl: './indice-cines.component.html',
  styleUrls: ['./indice-cines.component.css']
})
export class IndiceCinesComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {

  }

  prueba(){
    console.log("prueba")
  }

}
