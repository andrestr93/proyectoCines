import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  @Input()
  contenidoMarkdown = "";
  @Input()
  placeHolderTextArea:string = "Texto"

  @Output()
  changeMarkDown: EventEmitter<string> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }


  /*
  inputTextArea(event):void{

    const texto = event.target.value;
    this.contenidoMarkdown = texto;
    this.changeMarkDown.emit(texto)
    
  }

  */

  onChangueMarkDown(event){

    const texto = event.target.value;
    this.contenidoMarkdown = texto;
    this.changeMarkDown.emit(texto)


  }

 
}
