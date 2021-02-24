import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nome: string = "";
  cognome: string = "";
  telefono: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  add() {


  }

  conta() {
    this.router.navigateByUrl("/CountPage");

  }

  ricerca() {

    this.router.navigateByUrl("/SearchPage");

  }

}
