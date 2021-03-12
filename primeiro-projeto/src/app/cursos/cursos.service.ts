import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(): string[]
  {
    return ['Angular', 'PHP', 'Java', 'Javascript', 'Html'];
  }
}
