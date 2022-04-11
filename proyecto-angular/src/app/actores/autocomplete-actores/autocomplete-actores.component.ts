import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent ,  } from '@angular/material/autocomplete';


@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }

  control : FormControl = new FormControl()

  actores = [
    {nombre: 'Mel Gibson' , foto: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Mel_Gibson_Cannes_2016.jpg'},
    {nombre: 'Steven Spilberg' , foto: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Steven_Spielberg_by_Gage_Skidmore.jpg'},
    {nombre: 'Robin Williams' , foto: 'https://imagenes.elpais.com/resizer/YX2VmdjIJMu2co33DmnKS314WzE=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/NMEVO7KVNIJJ6HYNOMAMBCSJZQ.jpg'}


]

actoresOriginal = this.actores
actoresSeleccionados = [];
columnasAMostrar = ['imagen'];




  ngOnInit(): void {

    this.control.valueChanges.subscribe(valor=>{

      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);



    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent){

    console.log(event.option.value)
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('')


  }

}
