import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  username: string = "";


  contatti: string[] = [];

  constructor() { }
}
