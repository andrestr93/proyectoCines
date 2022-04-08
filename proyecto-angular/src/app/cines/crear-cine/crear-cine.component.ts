import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cineCreacionDTO } from '../cines';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css'],
})
export class CrearCineComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveCine() {
    this.router.navigate(['/cines']);
  }

  guardarCambios(cine : cineCreacionDTO){

    console.log(cine)


  }
}
