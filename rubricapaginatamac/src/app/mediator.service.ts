import { Injectable } from '@angular/core';
import { Contatto } from './contatto';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  //username: string = "";


  contatti: Contatto[] = [];

  constructor() { }
}
