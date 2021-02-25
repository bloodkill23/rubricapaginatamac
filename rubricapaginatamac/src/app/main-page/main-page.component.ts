import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  contatto:string="";


  constructor(private router: Router,private med:MediatorService) { }

  ngOnInit(): void {
  }

  VaiAllaPaginaRicerca(s: string) {

    this.router.navigateByUrl("/SearchPage");

    console.log(s);

  }

  VaiAllaPaginaConta(n: string) {

    this.router.navigateByUrl("/CountPage");
    console.log(n);

  }

  aggiungi(){
    this.med.contatti.push(this.contatto);
    this.contatto="";
  }
  conta(){
    this.router.navigateByUrl("/CountPage");
  }

}
