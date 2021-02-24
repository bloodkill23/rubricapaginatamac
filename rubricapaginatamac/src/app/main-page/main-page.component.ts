import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {



  constructor(private router: Router) { }

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

}
