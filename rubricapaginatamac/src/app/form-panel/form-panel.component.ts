import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {

  nome: string = "";
  cognome: string = "";
  telefono: string = "";

  @Output() eventoConta = new EventEmitter<string>();
  @Output() eventoRicerca = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }


  add() {


  }

  conta() {
    this.eventoConta.emit("evento conta passato");
  }

  ricerca() {
    this.eventoRicerca.emit("evento ricerca passato");

  }

}
