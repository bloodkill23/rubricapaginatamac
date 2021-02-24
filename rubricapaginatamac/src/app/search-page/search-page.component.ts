import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  criterioRicerca: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  torna() {
    this.router.navigateByUrl("/MainPage");
  }

  ricerca() {
  }
}
