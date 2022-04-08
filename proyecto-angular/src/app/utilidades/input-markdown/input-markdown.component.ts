import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  contenidoMarkdown = "";
  @Output()
  changeMarkDown: EventEmitter<string> = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }


  inputTextArea(event):void{

    const texto = event.target.value;
    this.contenidoMarkdown = texto;
    this.changeMarkDown.emit(texto)
    
  }

 
}
